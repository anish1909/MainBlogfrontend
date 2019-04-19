import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse}from '@angular/common/http';
import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl="https://blogapp.edwisor.com/api/v1/blogs";
  public baseUrl1="http://localhost:3000/api/v1/blogs";

  constructor(private _http:HttpClient) {
    console.log("blog sttp service is started");
   
   }
   // error handler
   public handleError(err:HttpErrorResponse){
     console.log("http error is called");
     console.log(err.message);
     return Observable.throw(err.message)

   }
   public getAllBlogs():any{
    let myresponse=this._http.get(this.baseUrl+'/all?authToken=YzU2N2MyOTAxNzIxODU4ZTFiNjYyY2QxMDVmNWJmNzhmOWEyNDNmNzc2ODI0NmIyYjQ1NzlkZjBlNTFmODIwOGQwY2MyODFkMGM4ODMzMDhiMDhkNzBiMzNkNmNlZWUxMjkwMGZlOTc1NWNjODQyNGY3ZmZlMDZkZTZhYjY1N2NmMQ==');
    //let myresponse=this._http.get(this.baseUrl1+'/all?authToken=Admin');
    console.log(myresponse);
     return myresponse;
   
  }
  public getSingleBlogInformation(currentBlogId):any{
   // let myresponse=this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken=YzU2N2MyOTAxNzIxODU4ZTFiNjYyY2QxMDVmNWJmNzhmOWEyNDNmNzc2ODI0NmIyYjQ1NzlkZjBlNTFmODIwOGQwY2MyODFkMGM4ODMzMDhiMDhkNzBiMzNkNmNlZWUxMjkwMGZlOTc1NWNjODQyNGY3ZmZlMDZkZTZhYjY1N2NmMQ==')
   let myresponse=this._http.get(this.baseUrl1+'/view'+'/'+currentBlogId+'?authToken=Admin');
   return myresponse;
        
 }
 public createBlog(blogData):any{
  // let myResponse=this._http.post(this.baseUrl+'/create'+'?authToken=YzU2N2MyOTAxNzIxODU4ZTFiNjYyY2QxMDVmNWJmNzhmOWEyNDNmNzc2ODI0NmIyYjQ1NzlkZjBlNTFmODIwOGQwY2MyODFkMGM4ODMzMDhiMDhkNzBiMzNkNmNlZWUxMjkwMGZlOTc1NWNjODQyNGY3ZmZlMDZkZTZhYjY1N2NmMQ==',blogData);
  let myresponse=this._http.post(this.baseUrl1+'/create'+'?authToken=Admin',blogData);
  return myresponse;

 }
 public deleteBlog(blogId):any{
   let data={};
   let myResponse=this._http.post(this.baseUrl +'/'+blogId+'/delete'+'?authToken=YzU2N2MyOTAxNzIxODU4ZTFiNjYyY2QxMDVmNWJmNzhmOWEyNDNmNzc2ODI0NmIyYjQ1NzlkZjBlNTFmODIwOGQwY2MyODFkMGM4ODMzMDhiMDhkNzBiMzNkNmNlZWUxMjkwMGZlOTc1NWNjODQyNGY3ZmZlMDZkZTZhYjY1N2NmMQ==',data);
   return myResponse;

 }
 public editBlog(blogId,blogData):any{
  let myResponse=this._http.put(this.baseUrl +'/'+blogId +'/edit'+'?authToken=YzU2N2MyOTAxNzIxODU4ZTFiNjYyY2QxMDVmNWJmNzhmOWEyNDNmNzc2ODI0NmIyYjQ1NzlkZjBlNTFmODIwOGQwY2MyODFkMGM4ODMzMDhiMDhkNzBiMzNkNmNlZWUxMjkwMGZlOTc1NWNjODQyNGY3ZmZlMDZkZTZhYjY1N2NmMQ==',blogData);
  return myResponse;

 }
}

