import {Component, NgModule} from '@angular/core';
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',

})

@NgModule({
  declarations: [ LoginComponent ],  //<<===here

})
export class AppComponent {
}
