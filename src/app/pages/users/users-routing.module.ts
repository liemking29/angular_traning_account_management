import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserCreateComponent } from './features/user-create/user-create.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },

  {
    path: 'create',
    component: UserCreateComponent,
  },
  { path: ':id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
