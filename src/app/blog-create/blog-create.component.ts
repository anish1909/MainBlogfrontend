import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import {ActivatedRoute,Router} from '@angular/router';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor( private blogHttpservice:BlogHttpService,private _route:ActivatedRoute,private router:Router) { 
    //this.toastr.setRootViewContainerRef(vcr);
  
  }
  //same as html component
  public  blogTitle:string;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public possibleCategories=["Comedy","Drama","Action","Technology"];


  ngOnInit() {
  }
  public createBlog():any{
    let blogData={
      title:this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory

    }
    //end of blog data
    console.log(blogData);
    this.blogHttpservice.createBlog(blogData).subscribe(
      data=>{
        console.log("blog created");
        console.log(data);
       alert("blog posted successfully");
       //this.toastr.success('!blog posted successfully', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);

        },1000)
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("some error occured");
        //this.toastr.error('blog is not posted successfully!', 'Oops!');

      }
    )
  }//end of create blog method

}
