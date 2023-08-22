import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Comments } from 'src/app/Models/comments';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  }