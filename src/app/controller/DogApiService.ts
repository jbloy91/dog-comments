import { Dog } from './../dog';
import "rxjs/Rx"
import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';



@Injectable()
export class DogApiService implements OnInit {
        getRoot: Observable<Dog[]> = this.http.get<any[]>('https://8q1ve786o5.execute-api.us-east-2.amazonaws.com/test');
    
           constructor(private http:HttpClient) {
           }
          
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
        }
