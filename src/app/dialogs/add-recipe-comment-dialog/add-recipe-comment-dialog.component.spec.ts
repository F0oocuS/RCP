import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeCommentDialogComponent } from './add-recipe-comment-dialog.component';

describe('AddRecipeCommentDialogComponent', () => {
  let component: AddRecipeCommentDialogComponent;
  let fixture: ComponentFixture<AddRecipeCommentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeCommentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
