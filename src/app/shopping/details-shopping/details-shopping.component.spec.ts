import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsShoppingComponent } from './details-shopping.component';

describe('DetailsShoppingComponent', () => {
  let component: DetailsShoppingComponent;
  let fixture: ComponentFixture<DetailsShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsShoppingComponent]
    });
    fixture = TestBed.createComponent(DetailsShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
