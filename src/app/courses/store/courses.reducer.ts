import { compareCourses, Course } from '../model/course';
import { createReducer, on } from '@ngrx/store';
import { CourseActions } from './courses.action';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface CoursesState extends EntityState<Course> {

}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses, // функция для сортировки
  selectId: course => course.id, // по какому полю сортируем
});

export const initialCourseState: CoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCourseState,
  on(CourseActions.allCoursesLoaded, (state, action) => {
    // console.log('File: courses.reducer.ts, Line: 17, action.courses():', action.courses);
    // принимает данные и прошлый стейт
    return adapter.addAll(action.courses, state);
  }),
);

export const {
  selectAll
} = adapter.getSelectors();


