import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/products/product-model';
import { BaseService } from './shared/base-api.service';
import { ProductResponseModel } from '../models/products/product-response-model';
import { StockModel } from '../models/products/stock-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  emmiter: EventEmitter<Array<ProductModel>> = new EventEmitter();

  constructor(
    private _baseService: BaseService<Array<ProductResponseModel>>,
  ) { }

  public getListProducts(): Observable<Array<ProductModel>> {
    this._baseService.get("api/Productos", "", true).subscribe(result => {

      let listProductsFormated: Array<ProductModel> = [];

      result.forEach(element => {
        let productFormated: ProductModel = new ProductModel();
        productFormated.description = element.descripcion;
        productFormated.idProduct = element.id_producto;
        productFormated.idStatus = element.id_estado;
        productFormated.image = element.imagen;
        productFormated.price = element.valor;


        productFormated.stock.quantity = element.stock.cantidad;
        productFormated.stock.idStock = element.stock.id_stock;

        listProductsFormated.push(productFormated);
      });

      return this.emmiter.next(listProductsFormated);
    })
    return this.emmiter;
  }

}
