import {Component, Input, OnInit} from '@angular/core';
import {RoundInfoObj, RoundInfoType} from "../../round-info/roundInfoModels";
import {InfoWidgetHeader} from "./infoWidgetHeaderModels";

@Component({
  selector: 'app-info-widget-header',
  templateUrl: './info-widget-header.component.html',
  styleUrls: ['./info-widget-header.component.css']
})
export class InfoWidgetHeaderComponent implements OnInit {

  @Input() infoWidgetHeader: InfoWidgetHeader;

  constructor() { }

  ngOnInit() {}

}
