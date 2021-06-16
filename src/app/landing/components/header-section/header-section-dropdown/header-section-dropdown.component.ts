import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DropdownContent {
  displayName: string;
  value: string;
}

@Component({
  selector: 'app-header-section-dropdown',
  templateUrl: './header-section-dropdown.component.html',
  styleUrls: ['./header-section-dropdown.component.scss'],
})
export class HeaderSectionDropdownComponent implements OnInit {
  @Input('updateTitle') updateTitleWhenValueChange: boolean = true;
  @Input() displayTitle: string; // use when you don't want update title when changed value
  @Input() dropdownItems: DropdownContent[];
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  show = false;
  private choosedItemSubject: BehaviorSubject<string>;
  choosedItem$: Observable<string>;

  constructor() {}

  ngOnInit(): void {
    console.log(this.dropdownItems[0].displayName)
    this.choosedItemSubject = new BehaviorSubject(this.dropdownItems[0].displayName);
    this.choosedItem$ = this.choosedItemSubject.asObservable();
  }

  chooseAction(item: DropdownContent) {
    this.choosedItemSubject.next(item.displayName);
    this.onSelect.emit(item.value);
    this.show = false;
  }

  // use for close dropdown when click outside of dropdown
  backdropClick() {
    this.show = !this.show;
  }
}
