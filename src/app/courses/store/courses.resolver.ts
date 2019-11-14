import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { finalize, first, tap } from 'rxjs/operators';
import { CourseActions } from './courses.action';

@Injectable(
)
export class CoursesResolver implements Resolve<any> {

  loading: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
      .pipe(
        tap(() => {
          if (!this.loading) {
            this.loading = true;
            this.store.dispatch(CourseActions.loadAllCourses());
          }
        }),
        first(), // получает первого наблюдаемого, благодаря чему может быть завершен переход по маршруту
        finalize(() => {
          this.loading = false;
        })
      );
  }

}
