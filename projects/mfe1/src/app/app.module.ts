import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthLibModule } from '@demo/auth-lib';
import { MessageBusModule } from '@demo/cross-cutting-concern';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    AuthLibModule,
    RouterModule.forRoot(APP_ROUTES),
    MessageBusModule,
  ],
  declarations: [HomeComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
