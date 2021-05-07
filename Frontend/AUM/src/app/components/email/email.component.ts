import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  course: Course=new Course();
  constructor(
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {
    this.edit();
  }

  edit(){
    let id=localStorage.getItem("id");
    this.service.getCourseId(+id)
    .subscribe(data=>{
      this.course=data;
    })
  }
  send(){
    alert("Email send Successfully!!!");
    this.router.navigate(["search"]);
  }
}
