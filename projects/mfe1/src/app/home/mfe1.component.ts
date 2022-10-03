import {
  Component,
  ComponentFactoryResolver,
  Inject,
  Injector,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@demo/auth-lib';
import { MessagingService } from '@demo/cross-cutting-concern';

//import {FrontendLibraryService, repos} from '@demo/frontend-library';

@Component({
  selector: 'mfe1',
  templateUrl: './mfe1.component.html',
})
export class Mfe1Component implements OnInit {
  requestMessage: string = '';
  userName = this.authService.userName;
  loading: boolean = false;
  errorMessage;
  constructor(
    @Inject(MessagingService) private messagingService,
    @Inject(AuthService) private authService,
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr,
    @Inject(Router) private router
  ) {}

  ngOnInit(): void {
    console.log('MFE1-message service ID: ' + this.messagingService.getId());
    console.log('MFE1-Auth service ID: ' + this.authService.getId());
  }

  sendReq() {
    this.router.navigate(['mfe2'], {
      queryParams: { messageText: this.requestMessage },
    });
    this.messagingService.setMessage(this.requestMessage);
  }

  public getRepos() {}
}
