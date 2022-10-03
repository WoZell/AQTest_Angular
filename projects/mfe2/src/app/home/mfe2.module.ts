import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthLibModule } from '@demo/auth-lib';
import { MessageBusModule } from '@demo/cross-cutting-concern';
import { Mfe2Component } from './mfe2.component';
import { MFE2_ROUTES } from './mfe2.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthLibModule,
    RouterModule.forChild(MFE2_ROUTES),
    MessageBusModule,
  ],
  declarations: [Mfe2Component],
})
export class Mfe2Module {}
