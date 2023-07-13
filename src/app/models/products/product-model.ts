import { StockModel } from "./stock-model";

export class ProductModel {

    idProduct: number;
    description: string;
    price: number;
    image: string;
    idStatus: number
    stock: StockModel = new StockModel();

    constructor() {
        this.idProduct = 0;
        this.description = "";
        this.price = 0;
        this.image = ""
        this.idStatus = 0;
    }
}


