import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShoppingComponent } from './create-shopping.component';

describe('CreateShoppingComponent', () => {
  let component: CreateShoppingComponent;
  let fixture: ComponentFixture<CreateShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateShoppingComponent]
    });
    fixture = TestBed.createComponent(CreateShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
