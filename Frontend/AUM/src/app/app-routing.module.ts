import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { CourseComponent } from './components/course/course.component';
import { SearchComponent } from './components/search/search.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { TrainingComponent } from './components/training/training.component';
import { NewTrainingComponent } from './components/new-training/new-training.component';
import { TrendsComponent } from './components/trends/trends.component';
import { EmailComponent} from './components/email/email.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SigninComponent },
      // { path: 'login', component: SigninComponent },
      { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
      { path: 'course', component: CourseComponent, canActivate: [AuthGuard]},
      { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
      { path: 'new-course', component: NewCourseComponent, canActivate: [AuthGuard]},
      { path: 'edit-course', component: EditCourseComponent, canActivate: [AuthGuard]},
      { path: 'training', component: TrainingComponent, canActivate: [AuthGuard]},
      { path: 'newTraining', component: NewTrainingComponent, canActivate: [AuthGuard]},
      { path: 'trends', component: TrendsComponent ,canActivate: [AuthGuard]},
      { path: 'email', component: EmailComponent,canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
