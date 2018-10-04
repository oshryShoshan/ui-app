import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Output() onOpenMenuClickedEvent = new EventEmitter<any>();

  public isMenuOpened: boolean = false;
  public isUserDetailsOpened: boolean = false;
  public userImage = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.userImage = this.loginService.getUserImage();
  }

  public onOpenMenuClicked() {
    console.log("onOpenMenuClicked");
    this.isMenuOpened = !this.isMenuOpened;
    this.onOpenMenuClickedEvent.emit(this.isMenuOpened)
  }

  public onOpenUserDetailsClicked () {
    this.isUserDetailsOpened = !this.isUserDetailsOpened;
  }

  public onSearchClicked() {
    console.log("onSearchClicked");
  }

  public onAddProjectClicked() {
    console.log("onAddProjectClicked");
  }

  public onEnvelopeClicked() {
    console.log("onEnvelopeClicked");
  }

  public onBellClicked() {
    console.log("onBellClicked");
  }
}
