import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private apiSvc:ApiService,private router:Router,private route:ActivatedRoute) { }
  isSearching:boolean = false;
  search(query:string){
    this.isSearching = true;
    this.apiSvc.search(query).subscribe(res=>{
      this.apiSvc.setResult(res)
    })
    this.router.navigate(['search'],
    {
      relativeTo:this.route,
      queryParams:{
        q:query
      }});
  }

}
