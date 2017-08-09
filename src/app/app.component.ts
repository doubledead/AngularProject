import { Component } from '@angular/core';

import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  account: {id: number, createDate: Date, description: string, primaryFullName: string, statusId: number} = this.accountService.account;

  constructor(private accountService: AccountService) {

  }
  title = 'app';
}
