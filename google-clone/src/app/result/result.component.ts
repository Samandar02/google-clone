import { Component, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  result:any;
  constructor(private apiSvc:ApiService) {
  }
  
  ngOnInit(){ 
    this.apiSvc.getResult().subscribe(res=>{
      this.result = res;
      console.log(111,res)})
    }

}
