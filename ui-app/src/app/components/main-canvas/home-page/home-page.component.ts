import {Component, Inject, OnInit} from '@angular/core';
import {ChartWidgetBaseObj, ChartWidgetDetails} from "../../../common/chart-widjet/Models";
import {EInfoListType, InfoWidgetObj} from "../../../common/info-widget/infoWidjetModels";
import {TasksServiceService} from "../../../services/tasks-service.service";
import {MessagesService} from "../../../services/messages.service";
import {ActivitiesService} from "../../../services/activities.service";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public userName = '';
  public salesChartWidget: ChartWidgetBaseObj;
  public reportChartWidget: ChartWidgetBaseObj;
  public salesChartWidgetDetails: ChartWidgetDetails;
  public reportChartWidgetDetails: ChartWidgetDetails;
  public actionableInfoWidgetObj: InfoWidgetObj;
  public messageInfoWidgetObj: InfoWidgetObj;
  public activityInfoWidgetObj: InfoWidgetObj;

  constructor(private tasksService: TasksServiceService,
              private messagesService: MessagesService,
              private activitiesService: ActivitiesService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.userName = this.loginService.getUserName();
    this.actionableInfoWidgetObj = {
      title: "Tasks",
      infoListType: EInfoListType.actionableList,
      list: this.tasksService.getTasks()
    };

    this.messageInfoWidgetObj = {
      title: "Messages",
      infoListType: EInfoListType.messageList,
      list: this.messagesService.getMessages()
    };

    this.activityInfoWidgetObj = {
      title: 'Activity',
      infoListType: EInfoListType.activityList,
      list: this.activitiesService.getActivityData()
    }

    this.salesChartWidgetDetails = {};
    this.salesChartWidget = {
      selectedListItem: {name: 'Last Year'},
      listItems: [{
        name: 'Last Year'
      },
        {
          name: 'Last Month'
        },
        {
          name: 'Last Week'
        },
        {
          name: 'Last Day'
        }],
      listSubjectName: 'Period',
      widgetTitle: 'Your Sales',
    };
    this.reportChartWidgetDetails = {};
    this.reportChartWidget = {
      selectedListItem: {name: 'Last Year'},
      listItems: [{
        name: 'Last Year'
      },
        {
          name: 'Last Month'
        },
        {
          name: 'Last Week'
        },
        {
          name: 'Last Day'
        }],
      listSubjectName: 'Period',
      widgetTitle: 'Report',
    };

  }
  public onSalesWidgetChangedStatusEvent($event) {
    console.log("onSalesWidgetChangedStatusEvent", $event)
  }

  public onReportWidgetChangedStatusEvent($event) {
    console.log("onReportWidgetChangedStatusEvent", $event)
  }
}
