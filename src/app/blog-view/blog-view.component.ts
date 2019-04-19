import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
 providers :[Location]
 
}
)
export class BlogViewComponent implements OnInit {

  public currentBlog;
 
  constructor(private _route:ActivatedRoute,private router:Router,public blogService:BlogService,public blogHttpservice:BlogHttpService,private location:Location) { 
    console.log("constructor is called");
    //get blog id wih the help of activated route
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
    //console.log(this.currentBlog);
    // calling the function to get the current blog id
    this.blogHttpservice.getSingleBlogInformation(myBlogId).subscribe(
      data=> {
        console.log("logging data");
        console.log(data);
        this.currentBlog=data["data"];
        console.log(this.currentBlog.blogId);

      },
      error=>{
        console.log("some error occured");
      }
    );
 
  }
 


  ngOnInit() {
    console.log("on int is called");
  }
  public goBackToPreviousPage():any{
    this.location.back();
  }
  public deleteThisBlog():any{
    this.blogHttpservice.deleteBlog(this.currentBlog.blogId).subscribe(
      data=> {
        console.log("deleted blog data");
        console.log(data);
        setTimeout(()=>{
          this.router.navigate(['/home']);

        },1000)

      },
      error=>{
        alert("no data deleted")
        console.log("some error occured");
      }

    );

  }
 

}
