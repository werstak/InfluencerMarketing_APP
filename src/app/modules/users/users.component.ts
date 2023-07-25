import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(
    public usersService: UsersService
  ) {
  }


  subUsers: any;
  users: any;


  ngOnInit(): void {

    this.fetchData();
  }


  fetchData() {

    // const data = {
    //   q: 'dav',
    //   limit: 10,
    //   type: 'search',
    //   platform: 'instagram',
    // }
    //

    const q = 'bey';
    const limit = 10;
    const type = 'lookalike';
    // const type = 'topic-tags';
    // const type = 'search';

    // const platform = 'youtube';
    // const platform = 'tiktok';
    const platform = 'instagram';


    // https://imai.co/api/dict/users/?q=dev&limit=10&type=search&platform=instagram


    this.subUsers = this.usersService
      .getAllUsers(q, limit, type, platform)
      .subscribe(resp => {
        this.users = resp;
        console.log(this.users)
      });

  }
}
