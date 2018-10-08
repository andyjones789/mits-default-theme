import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

/**
 * Represents a service that controls all global events (`document`, `window`)
 * that Pure components need to use. Made with aim to avoid double listeners
 * for the same event (e.g. page contains several tooltips that need to listen
 * for `keydown` method) and thus increasing overall performance.
 * 
 * Example usage:
 *
 *   this.eventHandler.onKeydown().subscribe(
 *     (event: KeyboardEvent) => this.onKeydown(event),
 *     (err) => this.eventHandler.handleErrorFromSubscriber(err)
 *   )
 *
 * Don't forget to unsubscribe on component destroy.
 */
@Injectable()
export class EventHandler {
  private keydown$: Observable<Event>;

  handleErrorFromSubscriber(err) {
    console.error(err);
  }

  onKeydown(): Observable<Event> {
    return this.keydown$;
  }

  constructor() {
    this.keydown$ = fromEvent(document, 'keydown');
  }
}