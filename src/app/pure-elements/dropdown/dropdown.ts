import { Component, OnInit, Input, ElementRef, ContentChildren, QueryList, HostListener, AfterContentInit } from '@angular/core';
import { startWith } from 'rxjs/operators';

import { ComponentNamer, PureComponent, ElementClasses, KEY_CODES } from '../core';
import { PureDropdownItem } from './dropdown-item';
import { DropdownPositionX, DropdownPositionY } from './dropdown-positions';

@Component({
  selector: 'pure-dropdown',
  template: `
    <div [ngClass]="elementClasses">
      <div [ngClass]="backdropClasses" (click)="onBackdropClick()"></div>

      <div [ngClass]="menuClasses">
        <ng-content select="[pureDropdownItem]"></ng-content>
        <span [ngClass]="appendixClasses"></span>
      </div>
    </div>
  `,
  exportAs: 'pureDropdown'
})
export class PureDropdown extends PureComponent implements OnInit, AfterContentInit {
  protected readonly elementName: string = 'Dropdown';
  protected readonly backdropName: string = 'Backdrop';
  protected readonly menuName: string = 'Menu';
  protected readonly appendixName: string = 'Appendix';

  backdropClasses: ElementClasses = {};
  menuClasses: ElementClasses = {};
  appendixClasses: ElementClasses = {};

  @ContentChildren(PureDropdownItem) items: QueryList<PureDropdownItem>;

  private readonly shownClassName: string;
  private yPositionClassName: string;
  private xPositionClassName: string;

  private focusedItemNumber: number | null = 0;

  @Input()
  get yPosition(): DropdownPositionY {
    return this._yPosition;
  }
  set yPosition(value: DropdownPositionY) {
    this._yPosition = value;

    this.menuClasses[this._yPositionClassname] = false;
    this._yPositionClassname = this.componentNamer.generateClassName(this.elementName, this.menuName, this._yPosition);
    this.menuClasses[this._yPositionClassname] = true;
  }
  private _yPosition: DropdownPositionY;
  private _yPositionClassname: string;

  @Input()
  get xPosition(): DropdownPositionX {
    return this._xPosition;
  }
  set xPosition(value: DropdownPositionX) {
    this._xPosition = value;

    this.menuClasses[this._xPositionClassname] = false;
    this._xPositionClassname = this.componentNamer.generateClassName(this.elementName, this.menuName, this._xPosition);
    this.menuClasses[this._xPositionClassname] = true;
  }
  private _xPosition: DropdownPositionX;
  private _xPositionClassname: string;

  get show(): boolean {
    return this._show;
  }
  set show(value: boolean) {
    this._show = value;

    this.elementClasses[this.shownClassName] = this._show;

    if (this._show) {
      this.setItemFocus(this.focusedItemNumber); 
    }
  }
  private _show: boolean = false;

  onBackdropClick() {
    this.show = false;
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeyup(event: KeyboardEvent) {
    if (this.show) {
      event.preventDefault();
      event.stopPropagation(); 

      if (event.which === KEY_CODES.DOWN_ARROW) {
        this.setItemFocus(++this.focusedItemNumber, 'down');
      } else if (event.which === KEY_CODES.UP_ARROW) {
        this.setItemFocus(--this.focusedItemNumber, 'up');
      }

      if (event.which === KEY_CODES.SPACE || event.which === KEY_CODES.ENTER) {
        this.clickItem(this.focusedItemNumber);
      }
    }
  }

  /** 
   * Unfocuses all items and sets focus to the given one. 'Direction' argument
   * specifies which item to focus next in case specified item is disabled.
   */
  setItemFocus(item: number | PureDropdownItem, direction: 'up' | 'down' = 'down'): void {
    const itemsArray = this.items.toArray();
    let itemNumber;

    if (typeof item !== 'number') {
      itemNumber = itemsArray.indexOf(item);
    } else {
      itemNumber = item;
    }

    if (itemNumber > itemsArray.length - 1) itemNumber = 0;
    if (itemNumber < 0) itemNumber = itemsArray.length - 1;

    this.unfocusItems();

    if (!itemsArray[itemNumber].disabled) {
      itemsArray[itemNumber].focused = true;
    } else {
      if (direction === 'up') {
        this.setItemFocus(--itemNumber, direction);
      } else {
        this.setItemFocus(++itemNumber, direction);
      }
      return;
    }
    this.focusedItemNumber = itemNumber;
  }

  clickItem(item: number | PureDropdownItem) {
    if (this.show) {
      const itemsArray = this.items.toArray();
      let itemNumber;
      
      if (typeof item !== 'number') {
        itemNumber = itemsArray.indexOf(item);
      } else {
        itemNumber = item;
      }
      
      itemsArray[itemNumber].click();
      this.show = false;
    }
  }

  private unfocusItems(): void {
    const itemsArray = this.items.toArray();

    for (const item of itemsArray) {
      item.focused = false;
    }
  }

  private setInnerElementsClasses(flag: boolean = true) {
    this.backdropClasses[this.componentNamer.generateClassName(this.elementName, this.backdropName)] = flag;
    this.menuClasses[this.componentNamer.generateClassName(this.elementName, this.menuName)] = flag;
    this.appendixClasses[this.componentNamer.generateClassName(this.elementName, this.appendixName)] = flag;
  }

  constructor(public elementRef: ElementRef, 
              protected componentNamer: ComponentNamer) { 
    super(elementRef, componentNamer);

    this.shownClassName = this.componentNamer.generateClassName(this.elementName, '', 'shown');
    this.yPosition = 'below';
    this.xPosition = 'after';
  }

  ngOnInit() {
    super.ngOnInit();

    this.setInnerElementsClasses();
  }

  ngAfterContentInit() {
    this.items.forEach((item) => {
      /** Close menu on item click. */
      item.onClickChanges.subscribe(() => {
        this.show = false;
      });

      /** Focus item on mousedown. */
      item.onMousedownChanges.subscribe(() => {
        this.setItemFocus(item);
      });
    });
  }
}
