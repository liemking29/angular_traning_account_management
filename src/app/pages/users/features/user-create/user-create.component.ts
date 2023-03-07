import { SaveDialogConfirmService } from './../../../../types/save-dialog-confirm.service';
import { AccountErrorInterface } from '../../../../types/Account.Error.Interface';
import { Component } from '@angular/core';
import { AccountInterface } from 'src/app/types/Account.Interface';
import Genders from 'src/app/untils/enums/Gender';
import * as _dayjs from 'dayjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent {
  SaveDialogConfirmService: any;
  constructor(private router: Router, private saveDialogConfirmService: SaveDialogConfirmService) {}

  accountList: AccountInterface[] = [];
  gender: typeof Genders = Genders;
  data: AccountInterface = {
    id: 0,
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
    this.data.id = this.accountList.length;

    if (this.data.dob) {
      this.data.dob = _dayjs(this.data.dob).format('DD/MM/YYYY');
    }
  }

  async saved() {
    this.accountList.push(this.data);
    localStorage.setItem('users', JSON.stringify(this.accountList));
    await this.router.navigate(['/users']);
  }

  async cancel() {
    await this.router.navigate(['/users']);
  }

  async save() {
    this.saveDialogConfirmService
      .openSaveConfirmDialog(this.data)
  }

  get isValid(): boolean {
    return (
      this.isValidated &&
      !this.error.account &&
      !this.error.name &&
      !this.error.dob &&
      !this.error.gender &&
      !this.error.address &&
      !this.error.email
    );
  }

  get isValidated(): boolean {
    return (
      this.data.account !== '' &&
      this.data.name !== '' &&
      this.data.dob !== null &&
      this.data.address !== '' &&
      this.data.email !== ''
    );
  }

  async validateAccount(event: any){
    if (!this.data.account.trim()) {
      this.error.account = 'Account cannot be empty.';
    } else {
      const regexAccount = /^[a-z0-9_-]{1,8}$/;
      const isValid = regexAccount.test(this.data.account);
      this.error.account = !isValid ? 'Account is Invalid.' : '';
    }
  }

  async validateName(event: any){ 
    if (!this.data.name.trim()) {
      this.error.name = 'Name cannot be empty.';
    } else {
      const regexName = /^[a-zA-Z0-9_-]{1,20}$/;
      const isValid = regexName.test(this.data.name);
      this.error.name = !isValid ? 'Name is Invalid.' : '';
    }
  }

  async validateAddress(event: any){
    if (!this.data.address.trim()) {
      this.error.address = 'Address cannot be empty.';
    } else {
      const regexAddress = /^[a-zA-Z0-9_-]{1,200}$/;
      const isValid = regexAddress.test(this.data.address);
      this.error.address = !isValid ? 'Address is Invalid.' : '';
    }
  }

  async validateEmail(event: any){
    if (!this.data.email.trim()) {
      this.error.email = 'Email cannot be empty.';
    } else {
      const regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
      const isValid = regexEmail.test(this.data.email);
      this.error.email = !isValid ? 'Email is Invalid.' : '';
    }
  }
}

