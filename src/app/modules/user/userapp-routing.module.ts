import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
//import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      
      { path: 'posts', component: PostsComponent },
    {path:'comment', component:CommentsComponent}

    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class UserappRoutingModule { }
