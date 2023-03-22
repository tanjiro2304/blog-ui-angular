import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../models/blog';
import { User } from '../models/user';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent {
  
  selectedBlog:any;
  blogId:any;
  user:any;
  constructor(private blogService: BlogService,private route:ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.blogId = params['id'];
      this.getBlog();
    });
  }
  getBlog(){
    this.blogService.getBlog(this.blogId).subscribe((data: Blog) =>{
      console.log(data);
      this.selectedBlog = data;
      this.user = this.selectedBlog.user;
    });
  }

  
}
