import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/leftt-menu/left-menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenuItemComponent } from './components/leftt-menu/menu-item/menu-item.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchComponentComponent } from './components/top-bar/search-component/search-component.component';
import { RoundImageComponent } from './common/round-image/round-image.component';
import { MainCanvasComponent } from './components/main-canvas/main-canvas.component';
import { HomePageComponent } from './components/main-canvas/home-page/home-page.component';
import { ChartWidjetComponent } from './common/chart-widjet/chart-widjet.component';
import { ChartWidjetHeaderComponent } from './common/chart-widjet/chart-widjet-header/chart-widjet-header.component';
import { InfoWidgetComponent } from './common/info-widget/info-widget.component';
import { InfoWidgetHeaderComponent } from './common/info-widget/info-widget-header/info-widget-header.component';
import { RoundInfoComponent } from './common/round-info/round-info.component';
import { ActionableListItemComponent } from './common/info-widget/infoListItems/actionable-list-item/actionable-list-item.component';
import {TasksServiceService} from "./services/tasks-service.service";
import { MessageListItemComponent } from './common/info-widget/infoListItems/message-list-item/message-list-item.component';
import {MessagesService} from "./services/messages.service";
import { ActivityListItemComponent } from './common/info-widget/infoListItems/activity-list-item/activity-list-item.component';
import {ActivitiesService} from "./services/activities.service";
import {LoginService} from "./services/login.service";

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    MenuItemComponent,
    TopBarComponent,
    SearchComponentComponent,
    RoundImageComponent,
    MainCanvasComponent,
    HomePageComponent,
    ChartWidjetComponent,
    ChartWidjetHeaderComponent,
    InfoWidgetComponent,
    InfoWidgetHeaderComponent,
    RoundInfoComponent,
    ActionableListItemComponent,
    MessageListItemComponent,
    ActivityListItemComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  providers: [TasksServiceService,
              MessagesService,
              ActivitiesService,
              LoginService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
