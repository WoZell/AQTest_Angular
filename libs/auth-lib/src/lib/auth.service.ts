import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: variable-name
  private _userName: string = null;
  private _id: number = 0;

  public get userName(): string {
    return this._userName;
  }

  constructor() { 
    this._id = Math.random();
  }

  getId():number{
    return this._id;
  }

  login(userName: string, password: string): void {
    this._userName = userName;
  }

  logout(): void {
    this._userName = null;
  }
}
