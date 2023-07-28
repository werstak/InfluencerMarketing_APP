import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

  posts: any;
  contacts: any;
  user: any;

  constructor(
    public usersService: UsersService
  ) {
  }


  ngOnInit() {
    this.getCurrentUser();
    this.getPosts();
    this.getContacts();
  }

  private getCurrentUser() {
    this.usersService.selectedUser$.subscribe((data) => {
      this.user = data;
    });
  }

  private getPosts() {
    this.usersService.postsSelectedUser$.subscribe((data) => {
      this.posts = data;
    });
  }


  private getContacts() {
    this.usersService.contactUser$.subscribe((data) => {
      this.contacts = data.user_profile.contacts;
    });
  }
}
