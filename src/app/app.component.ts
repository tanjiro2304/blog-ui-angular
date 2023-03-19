import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable} from 'rxjs';
import { BlogService } from './services/blog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-ui-angular';

  constructor(private blogService: BlogService){}

  ngOnInit() {
    this.onGetBlog();
  }
  
  onGetBlog(): void{
    // this.blogService.getAllBlog().subscribe(
    //   (response:any) => console.table(response),
    //   (error:any) => console.log(error),
    //   ()=> console.log("Done Getting All Blogs")
    // );
  }
  

  
}
