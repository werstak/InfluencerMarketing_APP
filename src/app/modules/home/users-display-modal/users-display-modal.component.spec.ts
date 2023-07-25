import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDisplayModalComponent } from './users-display-modal.component';

describe('UsersDisplayModalComponent', () => {
  let component: UsersDisplayModalComponent;
  let fixture: ComponentFixture<UsersDisplayModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersDisplayModalComponent]
    });
    fixture = TestBed.createComponent(UsersDisplayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
