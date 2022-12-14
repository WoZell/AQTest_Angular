import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthLibModule } from '@demo/auth-lib';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [BrowserModule, AuthLibModule, RouterModule.forRoot(APP_ROUTES)],
  declarations: [AppComponent, HomeComponent, ConfigComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
