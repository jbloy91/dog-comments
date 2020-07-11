import { Dog } from './../dog';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DogApiService } from '../controller/DogApiService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {


    
           constructor(private http:HttpClient) {
           }
  dogs: Dog[];
  dog: Dog = {
    id: 1,
    name: 'Lucy',
    comments: ['This is an excellent one','Truly Superb']
  };

  // https://8q1ve786o5.execute-api.us-east-2.amazonaws.com/test


  ngOnInit(): void {
    this.loadData(); 
  }

  loadData(){
    this.http.get<Dog[]>('https://8q1ve786o5.execute-api.us-east-2.amazonaws.com/test').subscribe((response) => {
      this.dogs = response as Dog[];
    });
    //console.log(this.dogs);
  }

}
