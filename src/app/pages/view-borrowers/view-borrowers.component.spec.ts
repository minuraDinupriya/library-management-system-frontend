import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBorrowersComponent } from './view-borrowers.component';

describe('ViewBorrowersComponent', () => {
  let component: ViewBorrowersComponent;
  let fixture: ComponentFixture<ViewBorrowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBorrowersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBorrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
