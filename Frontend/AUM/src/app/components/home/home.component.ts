import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = this.authService.user;
  }

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/']);
  }

  gotoCourse(): void{
    this.router.navigate(['/course']);
  }

}
