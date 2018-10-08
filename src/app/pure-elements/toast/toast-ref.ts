import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { PureToastContainer } from './toast-container';


/** Event that is emitted when a toast is dismissed. */
export interface PureToastDismiss {
  /** Whether the toast was dismissed using the action button. */
  dismissedByAction: boolean;
}

/**
 * Reference to a toast dispatched from the toast service.
 */
export class PureToastRef<T> {
  /** The instance of the component making up the content of the toast. */
  instance: T;

  /** The instance of the component making up the content of the toast. */
  containerInstance: PureToastContainer;

  /** Subject for notifying the user that the toast has been dismissed. */
  private readonly _afterDismissed = new Subject<PureToastDismiss>();

  /** Subject for notifying the user that the toast has opened and appeared. */
  private readonly _afterOpened = new Subject<void>();

  /** Subject for notifying the user that the toast action was called. */
  private readonly _onAction = new Subject<void>();

  private durationTimeoutId: any;

  /** Whether the toast was dismissed using the action button. */
  private _dismissedByAction = false;

  dismiss(): void {
    if (!this._afterDismissed.closed) {
      this.containerInstance.exit();
    }
    clearTimeout(this.durationTimeoutId);
  }

  /** Marks the toast action clicked. */
  dismissWithAction(): void {
    if (!this._onAction.closed) {
      this._dismissedByAction = true;
      this._onAction.next();
      this._onAction.complete();
    }
  }

  /** Dismisses the toast after some duration */
  dismissAfter(duration: number): void {
    this.durationTimeoutId = setTimeout(() => {
      this.dismiss();
    }, duration);
  }

  /** Marks the toast as opened */
  open(): void {
    if (!this._afterOpened.closed) {
      this._afterOpened.next();
      this._afterOpened.complete();
    }
  }

  /** Cleans up the DOM after closing. */
  private finishDismiss(): void {
    this._overlayRef.dispose();

    if (!this._onAction.closed) {
      this._onAction.complete();
    }

    this._afterDismissed.next({dismissedByAction: this._dismissedByAction});
    this._afterDismissed.complete();
    this._dismissedByAction = false;
  }

  /** Gets an observable that is notified when the toast is finished closing. */
  afterDismissed(): Observable<PureToastDismiss> {
    return this._afterDismissed.asObservable();
  }

  /** Gets an observable that is notified when the toast has opened and appeared. */
  afterOpened(): Observable<void> {
    return this.containerInstance.onEnter;
  }

  /** Gets an observable that is notified when the toast action is called. */
  onAction(): Observable<void> {
    return this._onAction.asObservable();
  }

  constructor(containerInstance: PureToastContainer,
              private _overlayRef: OverlayRef) {
    this.containerInstance = containerInstance;
    
    // Dismiss toast on action.
    this.onAction().subscribe(() => this.dismiss());
    containerInstance.onExit.subscribe(() => this.finishDismiss());
  }
}
