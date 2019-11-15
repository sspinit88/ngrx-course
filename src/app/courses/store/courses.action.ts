import { createAction, props } from '@ngrx/store';
import { Course } from '../model/course';
import { Update } from '@ngrx/entity';


export namespace CourseActions {
  export const loadAllCourses = createAction(
    '[Courses Resolver] Load all courses',
  );

  export const allCoursesLoaded = createAction(
    '[Load Courses Effect] All Courses Loaded',
    props<{ courses: Course[] }>()
  );

  export const courseUpdated = createAction(
    '[Edit Course] Edit course',
    props<{ update: Update<Course> }>()
  );

  // const update: Update<Course>;
  // // позволяет создать объект модели, содержащий только определенные свойства
  // update.changes;

}

