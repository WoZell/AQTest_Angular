import { Component, OnInit } from '@angular/core';
import { AuthService } from '@demo/auth-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log('Container-Auth service ID: ' + this.authService.getId());
    if (!this.authService.userName) this.authService.login('Demo-User', null);
  }
}
