import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { PLATFORM_LIST } from '../../../consts/platforms-list';
import { MatSelectChange } from '@angular/material/select';
import { LIMIT_LIST } from '../../../consts/limit-list';
import { LimitInterface } from '../../../interfaces/limit.Interface';
import { PlatformsInterface } from '../../../interfaces/platforms.interface';
import { TYPES_LIST } from '../../../consts/types-list';
import { TypesInterface } from '../../../interfaces/types.Interface';
import { BehaviorSubject, debounceTime, map, Observable, startWith, Subject, Subscription, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../../../services/users.service';
import { FiltersInterface } from '../../../interfaces/filters.Interface';
import { UsersInterface } from '../../../interfaces/users.Interface';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject();

  typeList = TYPES_LIST;
  platformsList = PLATFORM_LIST;
  limitList = LIMIT_LIST;

  /**Init Filters*/
  selectedTypeOption = 'search';
  selectedPlatformOption = 'instagram';
  selectedLimitOption = 5;

  filterForm: FormGroup = new FormGroup({});
  searchControl: FormControl = new FormControl();


  searchValue = '';
  formValue!: FiltersInterface;

  subUsers: any;
  subUser: any;
  subUserContacts: any;

  users: any;
  public users$ = new BehaviorSubject<UsersInterface[]>([]);

  selectedUser!: UsersInterface;

  postsSelectedUser!: any;
  contactsSelectedUser!: any;


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public usersService: UsersService
  ) {
  }


  ngOnInit() {
    this.buildForm();
    this.getChangesSearchControl();
  }

  private buildForm(): void {
    this.filterForm = this.fb.group({
      type: [this.selectedTypeOption, [Validators.required]],
      platform: [this.selectedPlatformOption, [Validators.required]],
      limit: [this.selectedLimitOption, [Validators.required]]
    });
  }

  private getFormValue(): void {
    this.formValue = this.filterForm.value;
  }

  private getChangesSearchControl(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      takeUntil(this.unsubscribe$)
    ).subscribe(val => {
      this.searchValue = val;
      this.getFormValue();
      this.fetchData();
    });
  }

  private fetchData() {
    let {limit, type, platform} = this.formValue;
    let q = this.searchValue;

    this.subUsers = this.usersService
      .getAllUsers(q, limit, type, platform)
      .subscribe(resp => {
        this.users = resp;
        this.users$.next(resp.data);
      });
  }

  getSelectedUser(user: UsersInterface): void {
    this.selectedUser = user;
    this.usersService.selectedUser$.next(this.selectedUser);
    this.usersService.imageLoading$.next(true);

    let url = this.selectedUser.user_id;

    this.subUser = this.usersService
      .getFeedUser(url)
      .subscribe(resp => {
        this.postsSelectedUser = resp;
        this.usersService.postsSelectedUser$.next(this.postsSelectedUser);
      });


    this.subUserContacts = this.usersService
      .getContactsUser(url)
      .subscribe(resp => {
        this.contactsSelectedUser = resp;
        this.usersService.contactUser$.next(this.contactsSelectedUser);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
