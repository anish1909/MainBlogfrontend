import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBlogs:any[];
  public filterText:string;
 
  constructor(public blogHttpService :BlogHttpService) { 
    console.log("home component is statrted");
  }

  ngOnInit() {
    console.log(" ng oninit in home component is called");
    // it returns observable
    this.allBlogs=this.blogHttpService.getAllBlogs().subscribe(
      data=> {
        console.log("logging data");
        console.log(data);
        this.allBlogs=data["data"];

      },
      error=>{
        console.log("some error occured");
      }
    )
    console.log(this.allBlogs)
  }
  delay(){
  setTimeout (() => {
    console.log("Hello from setTimeout");
 }, 1000);
  }

}
