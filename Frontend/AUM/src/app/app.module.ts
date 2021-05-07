import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SigninComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { SearchComponent } from './components/search/search.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { FormsModule } from '@angular/forms';
import { ServiceService} from '../app/services/service.service';
import { HttpClientModule} from '@angular/common/http';
import { TrainingComponent } from './components/training/training.component';
import { NewTrainingComponent } from './components/new-training/new-training.component';
import { TrendsComponent } from './components/trends/trends.component';
import { EmailComponent } from './components/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    SearchComponent,
    NewCourseComponent,
    EditCourseComponent,
    TrainingComponent,
    NewTrainingComponent,
    TrendsComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [AuthService, AuthGuard,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
