import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ServiceService} from '../../services/service.service';
import { Material } from 'src/app/model/material';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = [];
  fileName: String;
  material: Material=new Material();
  course: Course=new Course();
  selectedFile: File;
  constructor(
    private router:Router,
    private service: ServiceService
  ) { }

  ngOnInit(): void {
  }
  public onFileChanged(event) {
    this.material = event.target.files[0];
  }
  uploadFiles(){
    this.service.createMaterial(this.material)
    .subscribe(material=>{
      alert("New material succefully added!!!");
      this.router.navigate(["search"]);
    }
  )}
  goBack(){
    this.router.navigate(["search"]);
  }

}
