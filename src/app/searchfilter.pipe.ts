import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(allBlogs: any[], filterText: string): any[] {
    if(!filterText){
      return  allBlogs;
    }
    else{
      filterText=filterText.toUpperCase();
     console.log('the value is'+filterText) 
      console.log(filterText);
    }
    return allBlogs.filter( blog =>{
     
         return  blog.title.indexOf(filterText)!=-1}
    
    
   ) 
  }

}
