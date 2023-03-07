import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { UserCardComponent } from './components/modules/users/user-card/user-card.component';
import { UserListComponent } from './components/modules/users/user-list/user-list.component';
import { PaginationComponent } from './components/modules/users/pagination/pagination.component';
import { UsersComponent } from './pages/users/users.component';
import { UserCreateComponent } from './pages/users/features/user-create/user-create.component';
import { UserDetailsComponent } from './pages/users/features/user-details/user-details.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { TableDataDialogComponent } from './table-data-dialog/table-data-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DefaultLayoutComponent,
    UserCardComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailsComponent,
    PaginationComponent,
    MatConfirmDialogComponent,
    TableDataDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    DragDropModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    DragDropModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent],
})
export class AppModule {}
