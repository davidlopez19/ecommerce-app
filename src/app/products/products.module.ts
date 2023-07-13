import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ],
  declarations: [ProductsComponent, CreateProductComponent, ListProductComponent, DetailsProductComponent, DeleteProductComponent, UpdateProductComponent],
  exports: [ProductsComponent, CreateProductComponent, ListProductComponent, DetailsProductComponent, DeleteProductComponent, UpdateProductComponent]
})
export class ProductsModule { }
