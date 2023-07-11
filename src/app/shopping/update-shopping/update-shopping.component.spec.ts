import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShoppingComponent } from './update-shopping.component';

describe('UpdateShoppingComponent', () => {
  let component: UpdateShoppingComponent;
  let fixture: ComponentFixture<UpdateShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateShoppingComponent]
    });
    fixture = TestBed.createComponent(UpdateShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
