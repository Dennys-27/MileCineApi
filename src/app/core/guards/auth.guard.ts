import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { catchError, map, of } from 'rxjs';
import { AuthService } from '../services/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
     debugger;
     const token = localStorage.getItem("token") || "";
     const router = inject(Router);

     const accesoService = inject(AuthService)
     if(token != ""){
          return accesoService.validarToken(token).pipe(
               map(data => {
                    if(data.message){
                         return true
                    } else{
                         router.navigate([''])
                         return false;
                    }
               }),
               catchError(error => {
                    router.navigate([''])
                         return of(false);
               })
          )
     }else {
          // router.navigateByUrl("");
          // return false
          const url = router.createUrlTree([""])
          return url;
     }
  
};