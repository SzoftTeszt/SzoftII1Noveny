import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent {
  adatok:any
  showError=false
  errorMessage=""

  constructor(private base:BaseService){

    this.base.getData().subscribe(
    {
      next:  (res)=>{
        this.adatok=res
        this.showError=false
      },
      error: (err)=>{
          this.showError=true
          this.errorMessage=err.message
      }
    
    }
    )

  }
}
