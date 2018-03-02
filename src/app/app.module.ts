import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './services/post.service';
import { PostSaveComponent } from './post-save/post-save.component';
import { ButtonComponent } from './bootstrap/button/button.component';
import { GlyphComponent } from './bootstrap/glyph/glyph.component';
import { ModalComponent } from './bootstrap/modal/modal.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: PostListComponent},
  { path: 'posts/create', component: PostSaveComponent},
  { path: 'posts/:id/edit', component: PostSaveComponent},
  { path: 'posts', component: PostListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSaveComponent,
    ButtonComponent,
    GlyphComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
