import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { AuthActions } from '../auth.action';


export interface AuthState {
  user: undefined;
}

export const initialState: AuthState = {};

// export const reducers: ActionReducerMap<AuthState> = {};

export const authReducer = createReducer(
  initialState, // объект первой инициализации
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    };
  })
);
