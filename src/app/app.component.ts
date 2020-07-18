import { Component } from '@angular/core';
import { Dog } from './dog';
import { ServiceDogModel } from './dogs/ServiceDogModel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  router: Router;
  constructor(router: Router) {
    this.router = router;
  }
  ngOnInit(): void {
    this.router.navigate(['/dashboard']);
  }
//   title = 'Dog Comments';

//   dogs: Dog[] = [];

//   ngOnInit(): void {
//     this.loadData(); 
//   }

//   loadData(){
//     this.http.get<ServiceDogModel>('https://8q1ve786o5.execute-api.us-east-2.amazonaws.com/test/pics').subscribe((response) => {
//       console.log(response);
//       this.dogs = response.dogs;
//     });
// }
}
