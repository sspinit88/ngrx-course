import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions, LOGIN_ACTION_TYPE } from './auth.action';
import { User } from './model/user.model';
import { takeUntil, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(AuthActions.login),
          tap(action => {
              localStorage.setItem(
                'user',
                JSON.stringify(action.user));
              this.router.navigate(['/courses']);
            }
          ),
        ),
    { dispatch: false }, // если не указать -dispatch: false- , то получим бесконечный цикл
  );

  logout$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(AuthActions.logout),
          tap(() => {
            localStorage.clear();
            this.router.navigate(['']);
          }),
        ),
    { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    private router: Router,
  ) {

    //// устаревшая форма записи
    // actions$.subscribe((action: { type: string, user: User }) => {
    //   if (action.type === LOGIN_ACTION_TYPE) {
    //     localStorage.setItem('user', JSON.stringify(action.user));
    //   }
    // });

    //// чуть лучше
    // const
    //   login$ = this.actions$
    //     .pipe(
    //       ofType(AuthActions.login),
    //       tap(action => {
    //         return localStorage.setItem('user', JSON.stringify(action.user));
    //       }),
    //       takeUntil(actions$),
    //     );
    // login$.subscribe();
  }

}
