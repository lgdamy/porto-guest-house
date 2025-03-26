import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnderConstructionGuard implements CanActivate {

  constructor(
    private readonly snackbar: MatSnackBar,
    private readonly translate: TranslateService,
    ){
      translate.getTranslation('')
    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.snackbar.open(this.translate.instant('common.under-construction'), undefined, {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      return false;
  }
  
}
