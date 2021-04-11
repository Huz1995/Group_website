import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../service/post.service';
import { GeoJson, IGeoJson } from '../models/geoJson';


@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css']
})
export class SearchfieldComponent implements OnInit {
  form!: FormGroup
  userPosts: Array<GeoJson>

  constructor(public postService: PostService) {
     // Get userpost array
     this.userPosts = this.postService.getGeoPosts();
  }

  ngOnInit(): void {
     this.form = new FormGroup ({
        keyword: new FormControl(null),
        date: new FormControl(null),
     });
  }

  onSearch() {
    console.log(this.form.value.keyword);
     for (var index = 0; index < this.userPosts.length; ++index) {
        // If keyword entered equals keyword in user posts
        console.log(this.userPosts[index].properties.keyword);
        if (this.form.value.keyword == this.userPosts[index].properties.keyword) {
           console.log(this.form.value.keyword);
           console.log(this.userPosts[index].properties.keyword);
        }
     }
  }

}
