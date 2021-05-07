import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router:Router
    ){
   }

  ngOnInit(): void {
  }
  home(): any{
    this.router.navigate(['/login']);
  }
  menu(): any{
    this.router.navigate(['/home']);
  }
  signOut(): any{
    this.authService.signOut();
    this.router.navigate(['/']);
  }
  search(): any{
    this.router.navigate(['/search']);
  }
  newCourse(): any{
    this.router.navigate(['/new-course']);
  }
  Trends(){
    this.router.navigate(['/trends']);
  }
  
}
