import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListItem} from "../Models";

@Component({
  selector: 'app-chart-widjet-header',
  templateUrl: './chart-widjet-header.component.html',
  styleUrls: ['./chart-widjet-header.component.css']
})
export class ChartWidjetHeaderComponent implements OnInit {

  @Output() onMenuItemChanged = new EventEmitter<any>();
  @Input() listItems: ListItem[];
  @Input() selectedListItem: ListItem;
  @Input() listSubjectName: string;
  @Input() widgetTitle: string;

  //public widgetTitle = "Your Sales";
  //public listItems = ['Last Year', 'Last Month', 'Last Week', 'Last Day'];
  //public selectedListItem = this.listItems[0];
  //public listSubjectName = 'Period';
  public isMenuOpened: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public onListItemChanged(item) {
    if (this.compareListItem(this.selectedListItem, item)) return;
    this.selectedListItem = item;
    this.onMenuItemChanged && this.onMenuItemChanged.emit(item);
  }

  private compareListItem(a:ListItem, b: ListItem): boolean {
    return a.name == b.name;
  }
}
