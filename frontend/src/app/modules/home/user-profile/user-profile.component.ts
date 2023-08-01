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
  imageLoading: boolean = false;

  constructor(
    public usersService: UsersService
  ) {
  }


  ngOnInit() {
    this.getCurrentUser();
    this.getPosts();
    this.getLoadImg();
    this.getContacts();
  }

  private getCurrentUser() {
    this.usersService.selectedUser$.subscribe((data) => {
      this.user = data;
    });
  }

  private getLoadImg() {
    this.usersService.imageLoading$.subscribe((data) => {
      this.imageLoading = data;
      console.log('this.imageLoading', this.imageLoading);
    });
  }

  private getPosts() {
    this.usersService.postsSelectedUser$.subscribe((data) => {
      this.posts = data;
      console.log('this.posts', this.posts)
      if (this.posts.items) {
        this.imageLoading = false;
        this.usersService.imageLoading$.next(false);
      } else {
        return;
      }
    });
  }


  private getContacts() {
    this.usersService.contactUser$.subscribe((data) => {
      this.contacts = data.user_profile.contacts;
    });
  }


}
