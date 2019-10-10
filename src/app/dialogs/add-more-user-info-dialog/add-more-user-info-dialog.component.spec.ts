import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreUserInfoDialogComponent } from './add-more-user-info-dialog.component';

describe('AddMoreUserInfoDialogComponent', () => {
  let component: AddMoreUserInfoDialogComponent;
  let fixture: ComponentFixture<AddMoreUserInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoreUserInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoreUserInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
