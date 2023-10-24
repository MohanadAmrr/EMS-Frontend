import { ComponentFixture, TestBed } from '@angular/core/testing';

import { employeecrudComponent } from './employeecrud.component';

describe('employeecrudComponent', () => {
  let component: employeecrudComponent;
  let fixture: ComponentFixture<employeecrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [employeecrudComponent]
    });
    fixture = TestBed.createComponent(employeecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
