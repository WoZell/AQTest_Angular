import { REPO } from './../../models/repo';
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
  selector: 'mfe2',
  templateUrl: './mfe2.component.html',
})
export class Mfe2Component implements OnInit {
  errorMessage;
  loading: boolean = false;
  repos: REPO[] = [];
  searchTerm: string = '';
  shownRepos: REPO[] = [];
  userName = this.authService.userName;
  constructor(
    @Inject(MessagingService) private messagingService,
    @Inject(AuthService) private authService,
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr,
    @Inject(Router) private router
  ) {}

  ngOnInit(): void {
    console.log('MFE2-message service ID: ' + this.messagingService.getId());
    console.log('MFE2-Auth service ID: ' + this.authService.getId());
    this.getRepos();
    const sT = this.messagingService._serviceMessage;
    if (sT) {
      this.searchTerm = sT;
      this.search();
    }
  }

  search(): void {
    if (this.searchTerm) {
      this.shownRepos = this.repos.filter((repo: REPO) => {
        const description = repo.description
          ? repo.description
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase())
          : false;
        const name = repo.name
          ? repo.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          : false;
        return name || description;
      });
    } else this.shownRepos = this.repos;
  }

  searchFieldKeypress(event: KeyboardEvent): void {
    if (event.key === 'Enter') this.search();
  }

  public getRepos(): void {
    this.loading = true;
    const url = `https://api.github.com/users/${this.userName}/repos`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.repos = data;
        this.search();
        this.loading = false;
      });
  }
}
