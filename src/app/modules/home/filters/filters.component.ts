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
import { debounceTime, map, Observable, startWith, Subject, Subscription, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UsersDisplayModalComponent } from '../users-display-modal/users-display-modal.component';
import { UsersService } from '../../../services/users.service';
import { FiltersInterface } from '../../../interfaces/filters.Interface';



export interface State {
  flag: string;
  name: string;
  population: string;
}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  private componentDestroy$: Subject<null> = new Subject();


  // colorControl = new FormControl('primary' as ThemePalette);
  // types = ['lookalike', 'topic-tags', 'search'];
  // limit = [10, 20, 50];
  // platform = ['instagram', 'tiktok', 'youtube'];

  typeList = TYPES_LIST;
  platformsList = PLATFORM_LIST;
  limitList = LIMIT_LIST;

  selectedTypeOption = 'search';
  selectedPlatformOption = 'instagram';
  selectedLimitOption = 10;

  filterForm: FormGroup = new FormGroup({});

  searchControl: FormControl = new FormControl();
  // unsubFormFields: Subscription;

  searchValue = '';
  formValue!: FiltersInterface;

  subUsers: any;
  users: any;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public usersService: UsersService
  ) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }


  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }


  ngOnInit() {
    this.buildForm();
    this.getChangesSearchControl();

    // this.searchControl.valueChanges.subscribe(console.log)
  }

  private buildForm(): void {
    this.filterForm = this.fb.group({
      type: [this.selectedTypeOption, [Validators.required]],
      platform: [this.selectedPlatformOption, [Validators.required]],
      limit: [this.selectedLimitOption, [Validators.required]]
    });
  }


  getFormValue(): void {
    // const params = this.filterForm.value;
    this.formValue = this.filterForm.value;;
    console.log(465, this.formValue );
  }

  private getChangesSearchControl(): void {
    // this.searchControl.valueChanges.subscribe(console.log);

    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      // takeUntil(this.componentDestroy$)
    ).subscribe(val => {
      this.searchValue = val;
      console.log(this.searchValue)
      this.getFormValue();
      this.fetchData();
    });
  }


  fetchData() {

    // const data = {
    //   q: 'dav',
    //   limit: 10,
    //   type: 'search',
    //   platform: 'instagram',
    // }


    console.log(555, this.formValue);
    // let test =  this.formValue;

    let {limit, type, platform} = this.formValue;
    // const {limit, type, platform} = this.formValue;

    let q = this.searchValue;
    // const limit = 20;
    // const type = 'lookalike';
    // // const type = 'topic-tags';
    // // const type = 'search';
    //
    // // const platform = 'youtube';
    // // const platform = 'tiktok';
    // const platform = 'instagram';


    this.subUsers = this.usersService
      .getAllUsers(q, limit, type, platform)
      .subscribe(resp => {
        this.users = resp;
        console.log(this.users)
      });

  }


  openDialog() {
    this.dialog.open(UsersDisplayModalComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  // OnDestroy
  // ngOnDestroy(): void {
  //   this.componentDestroy$.next();
  // }

}