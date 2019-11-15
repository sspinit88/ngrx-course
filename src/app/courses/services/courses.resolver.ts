import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseEntityService } from './course-entity.service';
import { map } from 'rxjs/operators';


@Injectable()
export class CoursesResolver implements Resolve<boolean> {

  constructor(
    private coursesEntityService: CourseEntityService,
    // private
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {

    return this.coursesEntityService
      .getAll()
      .pipe(
        map(courses => !!courses),
      );
  }


}
