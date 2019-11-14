import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { CourseActions } from './courses.action';
import { selectAllCoursesLoaded } from './courses.selectors';

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
        select(selectAllCoursesLoaded),
        tap(coursesLoaded => {
          if (!this.loading && !coursesLoaded) {
            this.loading = true;
            this.store.dispatch(CourseActions.loadAllCourses());
          }
        }),
        filter(coursesLoaded => coursesLoaded),
        first(), // получает первого наблюдаемого, благодаря чему может быть завершен переход по маршруту
        finalize(() => {
          this.loading = false;
        })
      );
  }
}
