import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from 'rxjs';

export const AuthGuard: () => Observable<boolean | UrlTree> = () => {
  const afAuth = inject(AngularFireAuth);
  const router = inject(Router);
  return afAuth.authState.pipe(
    map(user => {
      if (user) {
        return true;
      } else {
        return router.createUrlTree(['/login']); // Redirect to login using UrlTree
      }
    })
  );
};
