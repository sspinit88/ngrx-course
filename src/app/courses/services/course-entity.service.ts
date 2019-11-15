import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Course } from '../model/course';

@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<Course> {
// EntityDefinitionService - Служба данных по умолчанию для вызовов удаленных служб, ориентированных на весь EntityCache.


  constructor(
    // конструктор принимает один параметр, который является фабрикой
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    // передаем наименование и обслуживающий сервис
    super('Course', serviceElementsFactory);
  }
}
