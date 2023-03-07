import { Component } from '@angular/core';
import { AccountInterface } from '../../../../types/Account.Interface';
import Genders from '../../../../untils/enums/Gender';
import { AccountErrorInterface } from '../../../../types/Account.Error.Interface';
import { ActivatedRoute, Router } from '@angular/router';
import * as _dayjs from 'dayjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  accountList: AccountInterface[] = [];
  gender: typeof Genders = Genders;

  id: number = -1;
  index: number = -1;

  data: AccountInterface = {
    id: -1,
    account: '',
    name: '',
    dob: '',
    gender: Genders.MALE,
    address: '',
    email: '',
    isDeleted: false,
  };

  error: AccountErrorInterface = {
    account: '',
    name: '',
    dob: '',
    gender: '',
    address: '',
    email: '',
    isValid: false,
  };

  ngOnInit() {
    // load data from localStorage
    const users: any = localStorage.getItem('users');
    this.accountList = [...JSON.parse(users)];
    this.id = Number(this.route.snapshot.paramMap.get('id') || -1);
    const index = this.accountList.findIndex((u) => u.id === this.id);

    if (index !== -1) {
      this.data = this.accountList[index];
      this.index = index;
    } else {
      this.router.navigate(['/users']);
    }
  }

  async saved() {
    this.accountList[this.index] = this.data;
    localStorage.setItem('users', JSON.stringify(this.accountList));
    await this.router.navigate(['/users']);
  }

  async cancel() {
    await this.router.navigate(['/users']);
  }
}
