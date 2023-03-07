import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  Inject,
} from '@angular/core';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as _dayjs from 'dayjs';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { AccountInterface } from '../types/Account.Interface';
import Genders from '../untils/enums/Gender';

@Component({
  selector: 'app-table-data-dialog',
  templateUrl: './table-data-dialog.component.html',
  styleUrls: ['./table-data-dialog.component.scss'],
})
export class TableDataDialogComponent implements OnInit {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<MatConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  accountList: AccountInterface[] = [];

  ngOnInit(): void {
    this.fetchUsers();
  }

  @Output() removed = new EventEmitter();
  gender: typeof Genders = Genders;

  toDobDisplay(date: any) {
    return _dayjs(date).format('DD/MM/YYYY');
  }
  closeDialog() {
    this.dialogRef.close(false);
  }

  async saved() {
    this.accountList.push(this.data.student);
    localStorage.setItem('users', JSON.stringify(this.accountList));
    await this.router.navigate(['/users']);
    this.dialogRef.close(false);
  }

  fetchUsers() {
    const users: any = localStorage.getItem('users');
    this.accountList = [...JSON.parse(users)];
  }
}
