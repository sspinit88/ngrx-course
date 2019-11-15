import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CourseActions } from './courses.action';
import { CoursesHttpService } from '../services/courses-http.service';
import { concatMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesEffects {

  loadCourses$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(CourseActions.loadAllCourses),
        concatMap(() =>
          this.coursesService.findAllCourses()),
        map(courses => CourseActions.allCoursesLoaded({ courses })),
      ),
  );

  updateCourses$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(CourseActions.courseUpdated),
          concatMap(
            action =>
              this.coursesService.saveCourse(
                action.update.id, // id обновляемого элемента
                action.update.changes, // передаем изменения
              )
          ),
        ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesHttpService,
  ) {
  }

}
