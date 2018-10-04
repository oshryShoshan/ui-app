import { Component, OnInit } from '@angular/core';
import { Action } from "./models";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor() { }
  public labels: any = {};
  public actions: Action[];
  ngOnInit() {
    this.initLabels();
    this.initActions();
  }

  private initLabels() {
    this.labels = {
      title: 'Merkury',
    };
  }

  private initActions() {
    this.actions = [//TODO: set correct icons
      this.generateAction('Home', 'fa-home', this.onHomeButtonClicked.bind(this), true),
      this.generateAction('Workflow', 'fa-bars', this.onWorkflowButtonClicked.bind(this), true),
      this.generateAction('Statistics', 'fa-line-chart', this.onHomeButtonClicked.bind(this), true),
      this.generateAction('Calender', 'fa-calendar', this.onCalenderButtonClicked.bind(this), true),
      this.generateAction('Users', 'fa-user', this.onUsersButtonClicked.bind(this), true),
      this.generateAction('Settings', 'fa-cog', this.onSettingsButtonClicked.bind(this), true),
    ]
  }

  private onHomeButtonClicked() {
    console.log("homeButtonClicked")
  }

  private onWorkflowButtonClicked() {
    console.log("WorkflowButtonClicked")
  }

  private onStatisticsButtonClicked() {
    console.log("StatisticsButtonClicked")
  }

  private onCalenderButtonClicked() {
    console.log("CalenderButtonClicked")
  }

  private onUsersButtonClicked() {
    console.log("UsersButtonClicked")
  }

  private onSettingsButtonClicked() {
    console.log("SettingsButtonClicked")
  }

  private generateAction(name: string, icon: string, action: Function, isAllowed: boolean): Action {
    return <Action> {
      name: name,
      faIcon: icon,
      action: action,
      isAllowed: isAllowed
    }
  }
}


