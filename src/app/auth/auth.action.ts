import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model';

export namespace AuthActions {
  export const
    login = createAction(
      // [Login Page] - ограничиваем страницу входа, вторым парметром - событие или команда, соответствующая действию
      // props ринимает полезную нагрузку, указываем тип этой нагрузки (payload)
      '[Login Page] User Login',
      props<{ user: User }>(),
    );

  export const
    logout = createAction(
      '[Top Menu] User Logout',
    );
}


