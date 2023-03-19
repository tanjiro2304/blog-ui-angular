import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.css']
})
export class SimpleCardComponent implements OnInit {
  constructor(public blogService:BlogService){

    }

  blog: any;
  blogs: any;

  ngOnInit():void{
    // this.getBlog(1);
    this.getAllBlogs();
  }

  getBlog(id: number){
    this.blogService.getBlog(id).subscribe((data: Blog) =>{
      console.log(data);
      this.blog = data;
    });
  
  }

  getAllBlogs():void{
    this.blogService.getAllBlog().subscribe((data:Blog[])=>{
      console.log(data);
      this.blogs=data;
    });
  }

}
  
  


 

