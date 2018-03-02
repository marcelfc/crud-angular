import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { ModalComponent } from '../bootstrap/modal/modal.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<any> = [];
  postToDelete = null;
  @ViewChild(ModalComponent)
  modal: ModalComponent;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.query().subscribe(data => this.posts = data);
  }

  // destroy(id, index) {
  //   if (confirm('Deseja realmente excluir este post ?')) {
  //     this.postService.destroy(+id).subscribe( () => {
  //       this.posts.splice(index, 1);
  //       alert('Post excluído');
  //     });
  //   }
  // }

  destroy() {
    const index = this.posts.indexOf(this.postToDelete);
    this.postService.destroy(this.postToDelete.id).subscribe( () => {
      this.posts.splice(index, 1);
      this.modal.close();
    });
  }

  openModal(post) {
    this.postToDelete = post;
    this.modal.open();
  }

}
