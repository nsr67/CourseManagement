import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Course } from '../model/course';
import { Material } from '../model/material';
import { materialize } from 'rxjs-compat/operator/materialize';

@Injectable()
export class ServiceService {
  constructor(
    private http:HttpClient,
    private httpClient: HttpClient
    ) { }

  Url= 'http://localhost:8080/courses';

  getCourses(){
    return this.http.get<Course[]>(this.Url);
  }
  createCourse(course:Course){
     return this.http.post<Course>(this.Url,course);
  }
  getCourseId(id:number){
    return this.http.get<Course>(this.Url+"/"+id);
  }
  updateCourse(course:Course){
    return this.http.put<Course>(this.Url+"/"+course.id,course);
  }
  deleteCourse(course:Course){
    return this.http.delete<Course>(this.Url+"/"+course.id);
  }
  createMaterial(material: Material){
    return this.http.post<Material>(this.Url,material);
  }
  deleteMaterial(material:Material){
    return this.http.delete<Material>(this.Url+"/"+material.id);
  }
}
