export class AuthenticationResponseModel {

    email: string;
    idCliente: number;
    nombre: string;
    token: string;

    constructor() {
        this.email = "";
        this.idCliente = 0;
        this.nombre = "";
        this.token = "";
    }
}
