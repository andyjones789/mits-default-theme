import { OnInit, Input, ElementRef, Directive, TemplateRef, Type, HostListener, ComponentRef, Renderer2, Injector, ComponentFactoryResolver, ViewContainerRef, ReflectiveInjector, Inject, OnDestroy, Optional } from '@angular/core';
import { Subscription } from 'rxjs';

import { PureComponent, ComponentNamer, KEY_CODES, EventHandler, coerceBooleanProperty, PureTheme, PureExtraClass } from '../core';
import { PureTooltipConfigToken } from './tooltip-config-token';
import { PureTooltipConfig, PureTooltipDefaultConfig, TooltipPosition, PureTooltipComponentConfig, TooltipTriggerEvent } from './tooltip-config';
import { PureTooltipComponent } from './tooltip-component';

export type TooltipContent = string | TemplateRef<any> | Type<any>;

@Directive({
  selector: '[pureTooltip]',
  exportAs: 'pureTooltip'
})
export class PureTooltip implements OnInit, OnDestroy {
  private componentRef: ComponentRef<PureTooltipComponent>;
  
  private config: PureTooltipConfig;

  private showTimeoutId = null;
  private hideTimeoutId = null;

  @Input('pureTooltipShowDelay') showDelay: number;
  @Input('pureTooltipHideDelay') hideDelay: number;
  touchendHideDelay: number;
  
  @Input('pureTooltipPosition') position: TooltipPosition;

  private closeOnEsc: boolean;

  private onKeydownSub: Subscription;

  @Input('pureTooltip')
  get content(): TooltipContent {
    return this._content;
  }
  set content(value: TooltipContent) {
    this._content = value;

    if (!this._content && this.componentRef) {
      this.destroyTooltip();
    }
  }
  private _content: TooltipContent;

  @Input('pureTooltipDisabled')
  get disabled(): boolean { 
    return this._disabled; 
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);

    if (this._disabled && this.isTooltipVisible()) {
      this.hide(0);
    }

    if (!this._disabled && this.triggeredToShow) {
      this.show(0);
    }
  }
  private _disabled: boolean = false;

  @Input('pureTooltipTheme')
  get theme(): PureTheme { 
    return this._theme; 
  }
  set theme(value: PureTheme) {
    this._theme = value;

    if (this.componentRef) {
      this.componentRef.instance.theme = value;
    }
  }
  private _theme: PureTheme;

  @Input('pureTooltipExtraClass')
  get extraClass(): PureExtraClass { 
    return this._theme; 
  }
  set extraClass(value: PureExtraClass) {
    this._theme = value;

    if (this.componentRef) {
      this.componentRef.instance.extraClass = value;
    }
  }
  private _extraClass: PureExtraClass;

  @Input('pureTooltipTriggerEvent')
  get triggerEvent(): TooltipTriggerEvent {
    return this._triggerEvent;
  }
  set triggerEvent(value: TooltipTriggerEvent) {
    this._triggerEvent = value;

    if (this.isTooltipVisible()) {
      this.triggeredToShow = false;
      this.hide(0);
    }
  }
  private _triggerEvent: TooltipTriggerEvent;

  private triggeredToShow: boolean = false;

  @HostListener('mouseenter')
  onMouseenter(): void {
    if (this.triggerEvent === 'hover') {
      this.triggeredToShow = true;
      this.show();
    }
  }

  @HostListener('mouseout')
  onMouseout(): void {
    if (this.triggerEvent === 'hover') {
      this.triggeredToShow = false;
      if (this.isTooltipVisible()) {
        this.hide();
      }
    }
  }

  @HostListener('longpress')
  onLongpress(): void {
    if (this.triggerEvent === 'hover') {
      this.triggeredToShow = true;
      this.show();
    }
  }

  @HostListener('touchend')
  onTouchend(): void {
    if (this.triggerEvent === 'hover') {
      this.triggeredToShow = false;
      if (this.isTooltipVisible()) this.hide(this.touchendHideDelay);
    }
  }

  @HostListener('focus')
  onFocus(): void {
    if (this.triggerEvent === 'focus') {
      this.triggeredToShow = true;
      this.show();
    }
  }

  @HostListener('blur')
  onBlur(): void {
    if (this.triggerEvent === 'focus') {
      this.triggeredToShow = false;
      if (this.isTooltipVisible()) this.hide();
    }
  }

  /** 
   * When trigger event is `hover` — body interactions should immediately cancel the tooltip if
   * there is a delay in hiding. 
   */
  @HostListener('body:click')
  onBodyClick(): void {
    if (this.triggerEvent === 'hover') {
      if (this.isTooltipVisible()) this.hide(0);
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.keyCode === KEY_CODES.ESCAPE) {
      if (this.closeOnEsc) {
        if (this.isTooltipVisible()) this.hide(0);
      }
    }
  }

  isTooltipVisible(): boolean {
    return this.componentRef && this.componentRef.instance.show;
  }

  toggle(): void {
    this.isTooltipVisible() ? this.hide(0) : this.show(0);
  }

  show(delay: number = this.showDelay): void {
    if (this.disabled) return;

    if (this.hideTimeoutId) {
      clearTimeout(this.hideTimeoutId);
    } else {
      this.showTimeoutId = setTimeout(() => {
        if (!this.componentRef) this.createTooltip();
        this.componentRef.instance.show = true;

        this.showTimeoutId = null;
      }, delay)
    }
  }

  hide(delay: number = this.hideDelay): void {
    if (this.showTimeoutId) {
      clearTimeout(this.showTimeoutId);
    } else {
      this.hideTimeoutId = setTimeout(() => {
        this.componentRef.instance.show = false;

        this.hideTimeoutId = null;
      }, delay);
    }
  }

  private createTooltip() {
    const factory = this.cfResolver.resolveComponentFactory(PureTooltipComponent),
          componentConfig: PureTooltipComponentConfig = {
            host: this.elementRef.nativeElement,
            position: this.position
          },
          injector = ReflectiveInjector.resolveAndCreate([{
            provide: 'pureTooltipConfig',
            useValue: componentConfig
          }]);
    this.componentRef = this.viewContainerRef.createComponent(factory, 0, injector, this.generateNgContent());
    this.componentRef.instance.theme = this.theme;
  }

  private destroyTooltip() {
    this.componentRef && this.componentRef.destroy();
    this.componentRef = null;
  }

  private generateNgContent() {
    if (typeof this.content === 'string') {
      const element = this.renderer.createText(this.content);
      return [[element]];
    } else if (this.content instanceof TemplateRef) {
      const context = {},
            viewRef = this.content.createEmbeddedView(context);
      return [viewRef.rootNodes];
    } else {
      // Else it's a component
      const factory = this.cfResolver.resolveComponentFactory(this.content),
            componentRef = factory.create(this.injector);
      return [[componentRef.location.nativeElement]];
    }
  }

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private injector: Injector,
              private cfResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private eventHandler: EventHandler,
              @Optional() @Inject(PureTooltipConfigToken) customConfig: PureTooltipConfig) {
    this.config = customConfig ? Object.assign(PureTooltipDefaultConfig, customConfig) : PureTooltipDefaultConfig;

    this.showDelay = this.config.showDelay;
    this.hideDelay = this.config.hideDelay;
    this.touchendHideDelay = this.config.touchendHideDelay;
    this.position = this.config.position;
    this.triggerEvent = this.config.triggerEvent;
    this.closeOnEsc = this.config.closeOnEsc;
  }

  ngOnInit() {
    this.onKeydownSub = this.eventHandler.onKeydown().subscribe(
      (event: KeyboardEvent) => this.onKeydown(event),
      (err) => this.eventHandler.handleErrorFromSubscriber(err)
    )
  }

  ngOnDestroy() {
    this.onKeydownSub.unsubscribe();
    
    this.destroyTooltip();
  }
}