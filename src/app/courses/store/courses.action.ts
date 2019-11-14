import { createAction, props } from '@ngrx/store';
import { Course } from '../model/course';


export namespace CourseActions {
  export const loadAllCourses = createAction(
    '[Courses Resolver] Load all courses',
  );

  export const allCoursesLoaded = createAction(
    '[Load Courses Effect] All Courses Loaded',
    props<{courses: Course[]}>()
  );
}


