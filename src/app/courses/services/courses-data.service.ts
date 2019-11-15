import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService extends DefaultDataService<Course> {

  //  DefaultDataService -Базовая, универсальная служба данных объектов, пригодная для сохранения большинства объектов

  constructor(
    http: HttpClient, // можно заменить и на вебсокеты
    httpUrlGenerator: HttpUrlGenerator,
  ) {
    super('Course', http, httpUrlGenerator);
  }
}
