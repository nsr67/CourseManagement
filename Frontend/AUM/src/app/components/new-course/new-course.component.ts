import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  course: Course=new Course();
  constructor(
    private router:Router,
    private service: ServiceService
  ) { }

  ngOnInit(){
  }
  save(){
    this.service.createCourse(this.course)
    .subscribe(data=>{
      alert("New course succefully added!!!");
      this.router.navigate(["course"]);
    }
  )}
}
