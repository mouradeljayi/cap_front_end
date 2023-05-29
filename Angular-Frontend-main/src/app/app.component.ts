import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Project_Angular';
 
  path = new Router 
  pathEmpty(){
    console.log('paths',this.path.url)
    if (this.path.url == '/'){
      return 
    }
  }
  constructor(
  ) {}

ngOnInit(): void {
  
}
}
