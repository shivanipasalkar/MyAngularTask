import { Component, OnInit, inject } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] | any = [];
  message: any = 'Processing';
  totalRecords: number | undefined;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15];

  constructor(private postServices: PostService) {
    this.posts;
  }


  ngOnInit(): void {

    this.postList();

  }

  postList(): void {
    this.postServices.getAllPosts().subscribe(data => {
      this.posts = data;
      this.totalRecords = data.length;
    }, (error) => {
      this.message = 'we are unable to process your request!!';
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.postList();

  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();

  }
}
