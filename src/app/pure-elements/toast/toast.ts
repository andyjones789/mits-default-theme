import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { ComponentRef, EmbeddedViewRef, Inject, Injectable, InjectionToken, Injector, Optional, SkipSelf, TemplateRef } from '@angular/core';
import { take, takeUntil } from 'rxjs/operators';
import { PureSimpleToast } from './simple-toast';
import { PureToastData, PureToastConfig } from './toast-config';
import { PureToastContainer } from './toast-container';
import { PureToastModule } from './toast-module';
import { PureToastRef } from './toast-ref';


export const PureToastDefaultOptions = new InjectionToken<PureToastConfig>('pure-toast-default-options', {
  providedIn: 'root',
  factory: PureToastDefaultOptionsFactory,
});

export function PureToastDefaultOptionsFactory(): PureToastConfig {
  return new PureToastConfig();
}

/**
 * Service to dispatch toast messages.
 */
@Injectable({
  providedIn: PureToastModule
})
export class PureToast {
  /**
   * Reference to the current toast in the view *at this level* (in the Angular injector tree).
   * If there is a parent toast service, all operations should delegate to that parent
   * via `_openedToastRef`.
   */
  private _toastRefAtThisLevel: PureToastRef<any> | null = null;

  /** Reference to the currently opened snackbar at *any* level. */
  get _openedToastRef(): PureToastRef<any> | null {
    const parent = this.parentToast;
    return parent ? parent._openedToastRef : this._toastRefAtThisLevel;
  }

  set _openedToastRef(value: PureToastRef<any> | null) {
    if (this.parentToast) {
      this.parentToast._openedToastRef = value;
    } else {
      this._toastRefAtThisLevel = value;
    }
  }

  constructor(
      private overlay: Overlay,
      private injector: Injector,
      private breakpointObserver: BreakpointObserver,
      @Optional() @SkipSelf() private parentToast: PureToast,
      @Inject(PureToastDefaultOptions) private defaultConfig: PureToastConfig) {}

  /**
   * Creates and dispatches a toast with a custom component for the content, removing any
   * currently opened toasts.
   */
  openFromComponent<T>(component: ComponentType<T>, config?: PureToastConfig):
    PureToastRef<T> {
    return this.attach(component, config) as PureToastRef<T>;
  }

  /**
   * Creates and dispatches a toast with a custom template for the content, removing any
   * currently opened toasts.
   */
  openFromTemplate(template: TemplateRef<any>, config?: PureToastConfig):
    PureToastRef<EmbeddedViewRef<any>> {
    return this.attach(template, config);
  }

  /**
   * Opens a snackbar with a message and an optional action.
   */
  open(message: string, action: string = '', config?: PureToastConfig):
      PureToastRef<PureSimpleToast> {
    const _config = {...this.defaultConfig, ...config};

    _config.data = {message, action};

    return this.openFromComponent(PureSimpleToast, _config);
  }

  /**
   * Dismisses the currently-visible toast.
   */
  dismiss(): void {
    if (this._openedToastRef) {
      this._openedToastRef.dismiss();
    }
  }

  /**
   * Attaches the toast container component to the overlay.
   */
  private attachToastContainer(overlayRef: OverlayRef,
                               config: PureToastConfig): PureToastContainer {

    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = new PortalInjector(userInjector || this.injector, new WeakMap([
      [PureToastConfig, config]
    ]));

    const containerPortal =
        new ComponentPortal(PureToastContainer, config.viewContainerRef, injector);
    const containerRef: ComponentRef<PureToastContainer> = overlayRef.attach(containerPortal);
    containerRef.instance.toastConfig = config;
    return containerRef.instance;
  }

  /**
   * Places a new component or a template as the content of the toast container.
   */
  private attach<T>(content: ComponentType<T> | TemplateRef<T>, userConfig?: PureToastConfig):
    PureToastRef<T | EmbeddedViewRef<any>> {

    const config = {...new PureToastConfig(), ...this.defaultConfig, ...userConfig};
    const overlayRef = this.createOverlay(config);
    const container = this.attachToastContainer(overlayRef, config);
    const toastRef = new PureToastRef<T | EmbeddedViewRef<any>>(container, overlayRef);

    if (content instanceof TemplateRef) {
      const portal = new TemplatePortal(content, null!, {
        $implicit: config.data,
        toastRef
      } as any);

      toastRef.instance = container.attachTemplatePortal(portal);
    } else {
      const injector = this.createInjector(config, toastRef);
      const portal = new ComponentPortal(content, undefined, injector);
      const contentRef = container.attachComponentPortal<T>(portal);

      // We can't pass this via the injector, because the injector is created earlier.
      toastRef.instance = contentRef.instance;
    }

    this.animateToast(toastRef, config);
    this._openedToastRef = toastRef;

    return this._openedToastRef;
  }

  /** Animates the old toast out and the new one in. */
  private animateToast(toastRef: PureToastRef<any>, config: PureToastConfig) {
    // When the snackbar is dismissed, clear the reference to it.
    toastRef.afterDismissed().subscribe(() => {
      // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
      if (this._openedToastRef == toastRef) {
        this._openedToastRef = null;
      }
    });

    if (this._openedToastRef) {
      // If a toast is already in view, dismiss it and enter the
      // new toast after exit animation is complete.
      this._openedToastRef.afterDismissed().subscribe(() => {
        toastRef.containerInstance.enter();
      });
      this._openedToastRef.dismiss();
    } else {
      // If no toast is in view, enter the new toast.
      toastRef.containerInstance.enter();
    }

    // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
    if (config.duration && config.duration > 0) {
      toastRef.dismissAfter(config.duration);
    }
  }

  /**
   * Creates a new overlay and places it in the correct location.
   */
  private createOverlay(config: PureToastConfig): OverlayRef {
    const overlayConfig = new OverlayConfig();

    let positionStrategy = this.overlay.position().global();

    // Set horizontal position.
    const isLeft = config.horizontalPosition === 'left';
    const isRight = !isLeft && config.horizontalPosition !== 'center';
    if (isLeft) {
      positionStrategy.left('0');
    } else if (isRight) {
      positionStrategy.right('0');
    } else {
      positionStrategy.centerHorizontally();
    }

    // Set horizontal position.
    if (config.verticalPosition === 'top') {
      positionStrategy.top('0');
    } else {
      positionStrategy.bottom('0');
    }

    overlayConfig.positionStrategy = positionStrategy;
    return this.overlay.create(overlayConfig);
  }

  /**
   * Creates an injector to be used inside of a toast component.
   */
  private createInjector<T>(config: PureToastConfig, toastRef: PureToastRef<T>): PortalInjector {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;

    return new PortalInjector(userInjector || this.injector, new WeakMap<any, any>([
      [PureToastRef, toastRef],
      [PureToastData, config.data]
    ]));
  }
}
