import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  entryComponents: [LoginComponent]

})

export class HomeComponent {

}
