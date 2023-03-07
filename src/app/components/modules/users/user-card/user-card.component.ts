import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountInterface } from '../../../../types/Account.Interface';
import Genders from 'src/app/untils/enums/Gender';
import * as _dayjs from 'dayjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/types/dialog.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  notificationService: any;
  res: any;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private dialogService: DialogService
  ) {}
  accountList: AccountInterface[] = [];

  @Input() data!: AccountInterface;
  @Output() removed = new EventEmitter();
  gender: typeof Genders = Genders;

  toDobDisplay(date: any) {
    return _dayjs(date).format('DD/MM/YYYY');
  }

  toEdit(id: number) {
    return this.router.navigate(['/users/' + id]);
  }

  toRemove(id: number) {
    //this.removed.emit(id);
    this.dialogService
      .openConfirmDialog('Are you sure to delete?')
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.removed.emit(id);
          this.notificationService.warn('Delete successfully!!!');
        }
      });
  }
}
