import { Injectable } from '@angular/core';
import { SecureStorageService } from './secure-storage.service';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    // no hay necesidad de secuenciar / analizar sus objetos antes y después de almacenarlos.
    //gracias a la libraria SecureStorage

   //inyecto el servicio de Storage service para poder acceder a sus metodos hash,encrypt, descript
   constructor(private storageService: SecureStorageService) {}
   // Set the json data to local storage
   setJsonValue(key: string, value: any) {
     //almaceno el local storage con clave valor
     this.storageService.secureStorage.setItem(key, value);

   }

   getJsonValue(key: string) {
     //obtengo los datos del key guardado
     return this.storageService.secureStorage.getItem(key);
   }

   clearToken(key) {
     // limpio todo el token cierro session
     return this.storageService.secureStorage.removeItem(key);
   }

   deleteItem( key: string){
     //elimina el item de acuerdo al index del mismo
     return this.storageService.secureStorage.removeItem( key)
   }
}
