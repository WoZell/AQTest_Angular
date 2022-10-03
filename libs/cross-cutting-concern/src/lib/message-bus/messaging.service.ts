import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  // tslint:disable-next-line: variable-name
  private _serviceMessage: string = null;
  private _id: number = 0;

  public get serviceMessage(): string {
    return this._serviceMessage;
  }

  constructor() {
    this._id = Math.random();
   }

  setMessage(serviceMessage: string): void {
    this._serviceMessage = serviceMessage;
  }

  getId():number{
    return this._id;
  }

  removeMessage(): void {
    this._serviceMessage = null;
  }
}

