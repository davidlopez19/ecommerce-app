import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ListShoppingComponent } from './list-shopping/list-shopping.component';
import { UpdateShoppingComponent } from './update-shopping/update-shopping.component';
import { CreateShoppingComponent } from './create-shopping/create-shopping.component';
import { DetailsShoppingComponent } from './details-shopping/details-shopping.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoppingComponent, ListShoppingComponent, UpdateShoppingComponent, CreateShoppingComponent, DetailsShoppingComponent],
  exports: [ShoppingComponent, ListShoppingComponent, UpdateShoppingComponent, CreateShoppingComponent, DetailsShoppingComponent]
})
export class ShoppingModule { }
