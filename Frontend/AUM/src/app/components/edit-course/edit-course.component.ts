import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course: Course=new Course();
  constructor(
    private route: Router,
    private service: ServiceService
  ) { }

  ngOnInit(){
    this.edit();
  }
  edit(){
    let id=localStorage.getItem("id");
    this.service.getCourseId(+id)
    .subscribe(data=>{
      this.course=data;
    })
  }
  modify(course: Course){
    this.service.updateCourse(course)
    .subscribe(data=>{
      this.course=data;
      alert("Course edited successfully!!!!");
    })
    this.route.navigate(["search"]);
  }

}
