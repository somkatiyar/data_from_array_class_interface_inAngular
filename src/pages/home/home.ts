//import statement
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//component declaration
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
//Home class declaration
export class Home implements OnInit {
  title = 'app';
  details = {};
  failedLogin = false;

// array declaration
   name =['Jhon','david','robert','julia','prince'];
   id =[1,2,3,4,5];
   status =["Active" ,"Unavailable" ,"Hide" ,"Active","Active"];
   image =["./assets/jhon.jpg", "./assets/david.jpeg" ,"./assets/robert.jpeg" ,"./assets/julia.jpg" ,"./assets/prince.jpeg"];

   users = [];

 //constructor of the Home class
  constructor(private router: Router) {

    for (var i= 0 ;i<this.name.length;i++){
      this.details = {"id":this.id[i],"name":this.name[i], "image" : this.image[i],
      "status" : this.status[i]};
      this.users.push(this.details);
      this.details = {};

    }

  }
//method for getting object
  getObject(x){
    console.log(x);

  }
  ngOnInit(){};
}
