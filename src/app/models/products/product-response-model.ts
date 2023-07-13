export class ProductResponseModel {

    id_producto: number;
    descripcion: string;
    valor: number;
    imagen: string;
    id_estado: number;
    stock: StockResponseModel;
    constructor() {
        this.id_producto = 0;
        this.descripcion = "";
        this.valor = 0;
        this.imagen = "";
        this.id_estado = 0;
        this.stock = new StockResponseModel();
    }
}

export class StockResponseModel {
    id_stock: number = 0;
    cantidad: number = 0;
}