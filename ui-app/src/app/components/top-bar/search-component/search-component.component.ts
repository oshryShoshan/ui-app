import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  @Output() onSearchClickedEvent = new EventEmitter<any>();
  @Input() isMenuOpened: boolean;

  public searchModel: string = '';

  constructor() { }

  ngOnInit() {
  }

  public onSearchClicked() {
    this.onSearchClickedEvent && this.onSearchClickedEvent.emit(this.searchModel);
  }
}
