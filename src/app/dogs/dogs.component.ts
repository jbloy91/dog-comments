import { ServiceDogModel } from './ServiceDogModel';
import { Dog } from './../dog';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
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
  dogs: Dog[] = [];
 
  newComment: string;
  // https://8q1ve786o5.execute-api.us-east-2.amazonaws.com/test


  ngOnInit(): void {
    this.loadData(); 
  }


  saveComment(dog:Dog){
      console.log(dog);
      dog.comments.push(this.newComment);
      this.newComment="";
      //this.dogs.//comments.push(newComment);
  }


  loadData(){
    this.http.get<ServiceDogModel>('https://8q1ve786o5.execute-api.us-east-2.amazonaws.com/test/pics').subscribe((response) => {
      console.log(response);
      this.dogs = response.dogs;
    });

   









    // this.dogs.forEach((dog) => {
    //   let imageUrl = dog.picture;
    //   this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
    //     console.log(base64data);
    //     dog.picture = 'data:image/jpg;base64,' + base64data;
    //   });
    // } )

    // this.http.get<ServiceDogModel[]>('https://8q1ve786o5.execute-api.us-east-2.amazonaws.com/test/pics').map((response: Response)=> {
    //   return {
    //     this.dogs = <ServiceDogModel[]>response.json();
    //   }
    // })
    
    // .subscribe((response) => {
    //   this.dogs = response as Dog[];
    // });
    //console.log(this.dogs);
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

}
