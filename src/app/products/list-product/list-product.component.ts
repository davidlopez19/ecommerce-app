import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/products/product-model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listProducts: Array<ProductModel> = [];

  constructor(
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this._productsService.getListProducts().subscribe(result => {
      this.listProducts = result;
    })
  }

}
