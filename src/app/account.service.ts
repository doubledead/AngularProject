import { Injectable } from '@angular/core';

import { Account } from './shared/account.model';

@Injectable()
export class AccountService {

  account: Account = {
    id: 1,
    createDate: new Date(),
    description: 'Test account',
    primaryFullName: 'John Smith',
    statusId: 1
  };

  constructor() { }

}
