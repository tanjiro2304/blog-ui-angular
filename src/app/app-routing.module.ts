import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { HomeComponent } from './home/home.component';
import { DisplayBlogComponent } from './display-blog/display-blog.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  {path:'create-blog',component:CreateBlogComponent},
  {path:'display-blog/:id',component:DisplayBlogComponent}
]

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule {
  
}
