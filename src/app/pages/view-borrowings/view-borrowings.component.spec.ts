import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBorrowingsComponent } from './view-borrowings.component';

describe('ViewBorrowingsComponent', () => {
  let component: ViewBorrowingsComponent;
  let fixture: ComponentFixture<ViewBorrowingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBorrowingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBorrowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
