import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthLibModule } from '@demo/auth-lib';
import { MessageBusModule } from '@demo/cross-cutting-concern';
import { Mfe1Component } from './mfe1.component';
import { MFE1_ROUTES } from './mfe1.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthLibModule,
    RouterModule.forChild(MFE1_ROUTES),
    MessageBusModule,
  ],
  declarations: [Mfe1Component],
})
export class Mfe1Module {}
