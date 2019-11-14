import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { AuthState } from '../auth/reducers';


export interface AppState {
  // auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

// метаредьюсер принимает редьюсер, который небходимо вызвать
// NgRx Meta Reducers это функции, вызываемые сразу после возникновения действия, но перед тем, как они будут переданы глобальному редюсеру.
// На практике они чаще всего используются для логирования.
export function logged(reducer: ActionReducer<any>): ActionReducer<any> {
  return ((state, action) => {
    // console.log('File: index.ts, Class: logged, Line: 21, state():', state);
    // console.log('File: index.ts, Class: logged, Line: 22, action():', action);
    return reducer(state, action); // возвращаем результат, передаем текущее состояние и переданный экшн
  });
}

export const metaReducers: MetaReducer<AppState>[] =
  // MetaReducer будут выполняться по порядку
  !environment.production ? [logged] : [];
