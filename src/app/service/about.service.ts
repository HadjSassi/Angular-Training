import { Injectable } from '@angular/core';
import { Comment} from '../model/Comment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private info ={
    name:"HADJ SASSI",
    prename:"Mahdi",
    email:"mahdi.hadjsassi@ensea.fr",
    tel:"+33 7 45 48 80 29",
    web:"https://www.hadjsassi.tunissports.university.tn"
  };

  comments: Comment[] = [];

  constructor() { }

  getInfos(){
    return this.info;
  }

  getAllComments(){
    return this.comments;
  }

  addComment(comment: Comment){
    if(comment.message != ''){
      // @ts-ignore
      comment.date = new Date();
      this.comments.push({
        id : 0 ,
        date: comment.date,
        message: comment.message
      });
      comment.message = '';
    }
  }

}
