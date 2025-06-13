import { Usuario } from "./Usuario";

export interface ResponseLogin {
    statusCode: number;
    isSuccess: boolean;
    errorMessages: string[];
    result: {
        usuario : Usuario,
        role: string,
        token: string
    }
}

export interface ResponseRegistro {
    statusCode: number;
    isSuccess: boolean;
    errorMessages: string[];
    result: {
        id : string,
        userName: string,
        nombre: string
    }
}

export interface ResponseLogout {
    message: string;
}