import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseEntityService } from './course-entity.service';
import { filter, first, map, tap } from 'rxjs/operators';


@Injectable()
export class CoursesResolver implements Resolve<boolean> {

  constructor(
    private coursesEntityService: CourseEntityService,
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {

    return this.coursesEntityService.loaded$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.coursesEntityService.getAll();
          }
        }),
        filter(loaded => !!loaded),
        first(), // получит первые данные и заверштит
      );
  }


}
