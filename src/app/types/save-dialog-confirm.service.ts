import { accounts } from './data';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableDataDialogComponent } from '../table-data-dialog/table-data-dialog.component';
import { AccountInterface } from './Account.Interface';
import Genders from '../untils/enums/Gender';

@Injectable({
  providedIn: 'root',
})
export class SaveDialogConfirmService {
  constructor(private dialog: MatDialog) {}
  name: string | undefined;

  openSaveConfirmDialog(dataPayload: AccountInterface) {
    return this.dialog.open(TableDataDialogComponent, {
      data: {
        student: dataPayload,
      },
    });
  }
}
