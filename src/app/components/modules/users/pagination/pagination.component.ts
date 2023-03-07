import { Component } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";





@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})


export class PaginationComponent {
handlePageEvent($event: PageEvent) {
throw new Error('Method not implemented.');
}
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;
}
