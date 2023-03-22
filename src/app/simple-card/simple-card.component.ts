import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.css']
})
export class SimpleCardComponent implements OnInit {
  constructor(public blogService:BlogService, private router:Router){

    }

  
  blogs: any;
  

  ngOnInit():void{
    // this.getBlog(1);
    this.getAllBlogs();
  }

  getAllBlogs():void{
    this.blogService.getAllBlog().subscribe((data:Blog[])=>{
      // console.log(data);
      this.blogs=data;
    });
  }

  gotToDisplayBlog(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
  
  


 

