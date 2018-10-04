import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChartWidgetBaseObj, ChartWidgetDetails} from "./Models";

@Component({
  selector: 'app-chart-widjet',
  templateUrl: './chart-widjet.component.html',
  styleUrls: ['./chart-widjet.component.css']
})
export class ChartWidjetComponent implements OnInit {
  @Input() chartWidgetBaseObj: ChartWidgetBaseObj;
  @Input() chartWidgetDetails: ChartWidgetDetails;
  @Output() onChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

  public onMenuItemChangedEvent($event) {
    console.log("onMenuItemChangedEvent: ", $event);
    this.onChange && this.onChange.emit($event);
  }
}
