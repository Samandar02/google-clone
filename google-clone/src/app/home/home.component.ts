import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private apiSvc:ApiService) { }
  query:string = '';
  isSearching:boolean = false;
  search(){
    this.apiSvc.search(this.query).subscribe(res=>{
      this.apiSvc.setResult(res)
      this.isSearching = true;
    })
  }

}
