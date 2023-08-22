import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments :Comment[] |any=[];
message: any = 'Processing';
constructor(private commentService: CommentsService) { }

ngOnInit(): void {
   
  this.comments = this.commentService.getAllComments().subscribe(data =>{
    this.comments=data;
  },(error)=> {
    this.message='we are unable to process your request!!';
  });
}
}
