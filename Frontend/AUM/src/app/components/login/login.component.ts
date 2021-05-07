  
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class SigninComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signIn(): void {
    this.authService.signIn().then(user => {
      this.router.navigate(['/home']);
    }).catch(error => {
      console.log(error);
    });
  }

}
