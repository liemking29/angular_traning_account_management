/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SaveDialogConfirmService } from './save-dialog-confirm.service';

describe('Service: SaveDialogConfirm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveDialogConfirmService],
    });
  });

  it('should ...', inject(
    [SaveDialogConfirmService],
    (service: SaveDialogConfirmService) => {
      expect(service).toBeTruthy();
    }
  ));
});
