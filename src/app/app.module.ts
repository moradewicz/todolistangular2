import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './register/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
