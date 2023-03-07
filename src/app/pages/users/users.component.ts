import { Component } from '@angular/core';
import { AccountInterface } from 'src/app/types/Account.Interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  accountList: AccountInterface[] = [];
  accountListSearching: AccountInterface[] = [];
  checked: boolean = false;
  searchText = '';


  ngOnInit() {
    // load data from localStorage
    this.fetchUsers();
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchText = target.value;
    console.log(target.value);
    this.accountListSearching = this.accountList.filter((account) => {
      return (
        account.name.toLowerCase().includes(this.searchText) ||
        account.address.toLowerCase().includes(this.searchText) ||
        account.account.toLowerCase().includes(this.searchText) ||
        account.email.toLowerCase().includes(this.searchText)
      );
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.accountList, event.previousIndex, event.currentIndex);
  }

  async removed(id: number) {
    const index = this.accountList.findIndex((u) => u.id === id);
    this.accountList.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.accountList));
    this.fetchUsers();
  }

  fetchUsers() {
    const users: any = localStorage.getItem('users');
    this.accountList = [...JSON.parse(users)];
    this.accountListSearching = this.accountList;
  }
}
