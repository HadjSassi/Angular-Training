import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule, DatePipe} from '@angular/common';
import {AboutService} from '../service/about.service';
import {Comment} from '../model/Comment';

@Component({
  selector: 'app-about',
  imports: [
    FormsModule,
    CommonModule,
    DatePipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  info: any;

  comment:Comment = {
    id: 0 ,
    date: null,
    message : ""
  };

  comments: Comment[] = [];

  newComment= false;

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.info = this.aboutService.getInfos();
    this.comments = this.aboutService.getAllComments();
  }

  addComment(){
    this.aboutService.addComment(this.comment);
  }

}
