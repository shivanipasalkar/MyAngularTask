import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { PostService } from 'src/app/services/post.service';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postService: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent], providers: [PostService]
    });
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('get all posts', () => {
    // expect(component).toBeTruthy();
    component.postList();
    
  });
});
