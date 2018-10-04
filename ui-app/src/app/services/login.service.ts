import { Injectable } from '@angular/core';
import {HOMER} from "../../assets/images";

@Injectable()
export class LoginService {

  constructor() { }

  public getUserName(): string {
    return 'john'
  }

  public getUserImage() {
    return HOMER;
  }

}
