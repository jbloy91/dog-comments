import { ServiceDogModel } from './ServiceDogModel';
import { Dog } from './../dog';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DogApiService } from '../controller/DogApiService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  exampleForm = new FormGroup({
    sample: new FormControl('', Validators.required),
});

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {

  }


  @Input() selectedDog;

  // newComment: string ='';
  // https://8q1ve786o5.execute-api.us-east-2.amazonaws.com/test


  saveComment() {
    console.log(this.exampleForm.controls['sample'].value)
    this.selectedDog.comments.push(this.exampleForm.controls['sample'].value);
    console.log(this.selectedDog)
    this.http.post<Dog>('https://8q1ve786o5.execute-api.us-east-2.amazonaws.com/test/comments',this.selectedDog,httpOptions)
    .subscribe((response)=> {
      console.log(response);
    }
      );
      // this.newComment = '';
    this.reset();
    //location.reload();
}
    //this.dogs.//comments.push(newComment);
  

  reset() {
    this.exampleForm.reset();
}

}
