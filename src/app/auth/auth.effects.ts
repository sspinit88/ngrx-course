import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { LOGIN_ACTION_TYPE } from './auth.action';
import { User } from './model/user.model';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
  ) {

    actions$.subscribe((action: { type: string, user: User }) => {
      if (action.type === LOGIN_ACTION_TYPE) {
        localStorage.setItem('user', JSON.stringify(action.user));
      }
    });

  }

}
