import { createSelector } from '@ngrx/store';
import { authReducer } from './reducers';

export const isLoggedIn = createSelector(
  // первый параметр (state) - глобальное состояние приложения
  // пока не будут изменены данные первого аргумента , обновления данных не будет
  state => state['authReducer'],
  // получаем доступ к данным, переводим результат в булево
  (auth) => !!auth.user,
);


export const isLoggedOut = createSelector(
  // селекторы можно объединять
  isLoggedIn,
  loggedIn => !loggedIn,
);
