import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
//import { LayoutComponent } from './layout/layout.component';
import { UserappRoutingModule } from './userapp-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DashboardComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule, UserappRoutingModule
  ]
})
export class UserModule { }
