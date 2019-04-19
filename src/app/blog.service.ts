import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs=[
    {
      "blogId": "1",
      "lastmodifies": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "anish",
      "category": "romantic",
      "ispublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is a blog  1 dscription",
      "title": "this is blog 1 title"
    },
    {
      "blogId": "2",
      "lastmodifies": "2017-11-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "anish srivastava",
      "category": "drama",
      "ispublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is a blog  2 dscription",
      "title": "this is blog 2 title"

    },
    {
      "blogId": "3",
      "lastmodifies": "2017-12-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "anish  km srivastava",
      "category": "horror",
      "ispublished": true,
      "views": 1,
      "bodyHtml": "this is blog body",
      "description": "this is a blog  3 dscription",
      "title": "this is blog 3 title"

    }
   ]
   public currentBlog;


  constructor() {
    console.log("blog service is stated");
   }
   public getAllBlogs():any{
     return this.allBlogs;
   }
   public getSingleBlogInformation(currentBlogId):any{
    for(let blog of this.allBlogs){
      if(blog.blogId==currentBlogId){
        this.currentBlog=blog;
      }
    }
    return this.currentBlog
         
  }
}
