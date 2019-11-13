import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authReducer, AuthState } from './reducers';


export const selectAuthState =
  createFeatureSelector<AuthState>('authReducer');

export const isLoggedIn = createSelector(
  // первый параметр (state) - глобальное состояние приложения
  // пока не будут изменены данные первого аргумента , обновления данных не будет
  // state => state['authReducer'],

  // а след строка - альтернативный вариант для записи, что сделана выше
  selectAuthState,
  // получаем доступ к данным, переводим результат в булево
  (auth) => !!auth.user,
);


export const isLoggedOut = createSelector(
  // селекторы можно объединять
  isLoggedIn,
  loggedIn => !loggedIn,
);
