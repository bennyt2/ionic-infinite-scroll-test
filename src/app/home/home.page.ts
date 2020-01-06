import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts: number[] = [];
  maxPosts: number = 100;
  step: number = 5;
  loadedPosts: number = 0;
  allPostsLoaded: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.addPosts(this.step);
  }

  addPosts(number: number) {
    for (let i = 0; i < number; i++) {
      this.posts.push(this.posts.length + 1);
      this.loadedPosts = this.posts.length + 1;
    }
  }

  getMorePosts(event) {
    setTimeout(() => {
      this.addPosts(this.step);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.loadedPosts > this.maxPosts) {
        event.target.disabled = true;
        this.allPostsLoaded = true;
      }
    }, 500)
  }
}
