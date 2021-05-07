import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../../services/service.service';
import { Material } from 'src/app/model/material';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  materials: Material[];
  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addMaterial(){

  }
  delete(material: Material): void{
    this.service.deleteMaterial(material)
    .subscribe(data=>{
      this.materials=this.materials.filter(c=>c!==material);
    })
    alert("Course is deleted");
  }
  gotoSearch(){
    this.router.navigate(["search"])
  }
}
