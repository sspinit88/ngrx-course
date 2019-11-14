import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { AuthActions } from '../auth.action';
import { User } from '../model/user.model';


export interface AuthState {
  user: User;
}

export const initialState: AuthState = {
  user: undefined,
};

// export const reducers: ActionReducerMap<AuthState> = {};

export const authReducer = createReducer(
  initialState, // объект первой инициализации
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  }),
);
