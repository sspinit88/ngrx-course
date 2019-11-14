import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model';


export const LOGIN_ACTION_TYPE = '[Login Page] User Login';
export const LOGOUT_ACTION_TYPE = '[Top Menu] User Logout';


export namespace AuthActions {
  export const
    login = createAction(
      // [Login Page] - ограничиваем страницу входа, вторым парметром - событие или команда, соответствующая действию
      // props ринимает полезную нагрузку, указываем тип этой нагрузки (payload)
      LOGIN_ACTION_TYPE,
      props<{ user: User }>(),
    );

  export const
    logout = createAction(
      LOGOUT_ACTION_TYPE,
    );
}


