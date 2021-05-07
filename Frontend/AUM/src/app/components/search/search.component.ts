import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { ServiceService} from '../../services/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  courses: Course[];
  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getCourses()
    .subscribe(data=>{
      this.courses=data;
    });
  }

  edit(course: Course): void{
    localStorage.setItem("id",course.id.toString());
    this.router.navigate(["edit-course"]);
  }
  delete(course: Course){
    this.service.deleteCourse(course)
    .subscribe(data=>{
      this.courses=this.courses.filter(c=>c!==course);
    })
    alert("Course is deleted");
  }
  goBack(){
    this.router.navigate(["course"]);
  }
  gotoTraining(){
    this.router.navigate(["training"]);
  }
  addTraining(){
    this.router.navigate(["newTraining"]);
  }
  sendEmail(){
    this.router.navigate(["email"]);
  }
}
