import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { UsersInterface } from '../../../interfaces/users.Interface';
import { POSTS } from '../../../consts/posts';
import { CONTACTS } from '../../../consts/contacts';

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
    this.user = {
      user_id: '26029182',
      username: 'tatawerneck',
      fullname: 'Tata Werneck',
      picture: 'https://imgp.sptds.icu/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDZ1lZ8aZKTZKMNs3u6PocJJPgxHxhFwgGleTkQHtny1tpCBlv%2FUQL%2Fgc47ANYpxQRutOQT7OzbPAM1V4C0xKhsM',
      followers: 56126765,
      is_verified: true
    };
  }


  // private getCurrentUser() {
  //   this.usersService.selectedUser$.subscribe((data) => {
  //     this.user = data;
  //     console.log('1111 user', this.user)
  //   });
  // }

  private getPosts() {

    this.posts = POSTS;

    // this.usersService.postsSelectedUser$.subscribe((data) => {
    //   this.posts = data;
    //   console.log('22222  this.posts', this.posts)
    // });


  }


  private getContacts() {
    this.contacts = CONTACTS.user_profile.contacts;
  }
}
