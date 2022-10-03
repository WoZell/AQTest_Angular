import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
  lookup(): Promise<Microfrontend[]> {
    return Promise.resolve([
      {
        // For Loading
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module',

        // For Routing
        displayName: 'Microfrontend 1',
        routePath: 'mfe1',
        ngModuleName: 'Mfe1Module',
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './Module',

        // For Routing
        displayName: 'Microfrontend 2',
        routePath: 'mfe2',
        ngModuleName: 'Mfe2Module',
      },
    ] as Microfrontend[]);
  }
}
