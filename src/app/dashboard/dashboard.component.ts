import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../dog';
import { ServiceDogModel } from '../dogs/ServiceDogModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http:HttpClient) {
  }
  
  title = 'Dog Comments';

  dogs: Dog[] = [];

  ngOnInit(): void {
    this.loadData(); 
  }

  loadData(){
    this.http.get<ServiceDogModel>('https://8q1ve786o5.execute-api.us-east-2.amazonaws.com/test/pics').subscribe((response) => {
      console.log(response);
      this.dogs = response.dogs;
    });
}

}
