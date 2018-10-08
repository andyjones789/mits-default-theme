import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, ElementRef, EmbeddedViewRef, NgZone, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { PureToastConfig } from './toast-config';
import { ComponentNamer, ElementClasses } from '../core';


/**
 * Internal component that wraps user-provided toast content.
 */
@Component({
  selector: 'pure-toast-container',
  template: `
    <div
      [ngClass]="elementClasses">
      <ng-container cdkPortalOutlet></ng-container>
    </div>`
})
export class PureToastContainer extends BasePortalOutlet implements OnDestroy {
  protected readonly elementName: string = 'Toast Container';

  private isDestroyed: boolean = false;

  elementClasses: ElementClasses = {};

  /** The portal outlet inside of this container into which the toast content will be loaded. */
  @ViewChild(CdkPortalOutlet) portalOutlet: CdkPortalOutlet;

  /** Subject for notifying that the toast has exited from view. */
  readonly onExit: Subject<any> = new Subject();

  /** Subject for notifying that the toast has finished entering the view. */
  readonly onEnter: Subject<any> = new Subject();

  /** Attach a component portal as content to this toast container. */
  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    this.assertNotAttached();
    this.applyToastClasses();
    return this.portalOutlet.attachComponentPortal(portal);
  }

  /** Attach a template portal as content to this toast container. */
  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    this.assertNotAttached();
    this.applyToastClasses();
    return this.portalOutlet.attachTemplatePortal(portal);
  }

  /** Handle end of animations, updating the state of the toast. */
  onAnimationEnd() {
    this.completeExit();

    const onEnter = this.onEnter;

    this.ngZone.run(() => {
      onEnter.next();
      onEnter.complete();
    });
  }

  /** Begin animation of toast entrance into view. */
  enter(): void {
    if (!this.isDestroyed) {
      this.setElementVisibility(true);
      this.changeDetectorRef.detectChanges();
    }
  }

  /** Begin animation of the toast exiting from view. */
  exit(): Observable<void> {
    this.setElementVisibility(false);

    setTimeout(() => {
      this.onAnimationEnd();
    }, this.toastConfig.cssTransitionDuration);

    return this.onExit;
  }

  private setElementVisibility(flag: boolean) {
    this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', 'visible')] = flag;
  }

  /**
   * Waits for the zone to settle before removing the element. Helps prevent
   * errors where we end up removing an element which is in the middle of an animation.
   */
  private completeExit() {
    this.ngZone.onMicrotaskEmpty.asObservable().pipe(take(1)).subscribe(() => {
      this.onExit.next();
      this.onExit.complete();
    });
  }

  private applyToastClasses() {
    const element: HTMLElement = this.elementRef.nativeElement;
    const containerExtraClasses = this.toastConfig.containerExtraClass;

    if (containerExtraClasses) {
      if (Array.isArray(containerExtraClasses)) {
        containerExtraClasses.forEach(cssClass => element.classList.add(cssClass));
      } else {
        element.classList.add(containerExtraClasses);
      }
    }

    this.setPositionClasses();
  }

  private setPositionClasses(flag: boolean = true) {
    this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', 'h-' + this.toastConfig.horizontalPosition)] = flag;
    this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', 'v-' + this.toastConfig.verticalPosition)] = flag;
  }

  private assertNotAttached() {
    if (this.portalOutlet.hasAttached()) {
      throw Error('Attempting to attach toast content after content is already attached');
    }
  }

  constructor(private ngZone: NgZone,
              private elementRef: ElementRef,
              private changeDetectorRef: ChangeDetectorRef,
              public toastConfig: PureToastConfig,
              private componentNamer: ComponentNamer) {
    super();

    this.elementClasses[this.componentNamer.generateClassName(this.elementName)] = true;
  }

  ngOnDestroy() {
    this.isDestroyed = true;
    this.completeExit();
  }
}
