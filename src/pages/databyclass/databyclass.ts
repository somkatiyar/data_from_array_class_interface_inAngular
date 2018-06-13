//import statement
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// component declaration
@Component({
  selector: 'app-databyclass',
  templateUrl: './databyclass.html',
  styleUrls: ['./databyclass.css']
})

//class decoration
export class DataByClass implements OnInit {
  title = 'app';
  details = {};
  failedLogin = false;


//array declaration
  name =['Jhon','david','robert','julia','prince'];
  id =[1,2,3,4,5];
  status =["Active" ,"Unavailable" ,"Hide" ,"Active","Active"];
    image =["https://m.media-amazon.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_UY317_CR25,0,214,317_AL_.jpg",
     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/David_Leitch_2014.jpg/1200px-David_Leitch_2014.jpg" ,
     "https://m.media-amazon.com/images/M/MV5BMTk1Nzc5MzQyMV5BMl5BanBnXkFtZTcwNjQ5OTA0Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg" ,
     "https://m.media-amazon.com/images/M/MV5BNGNiN2ZjZGMtZjZmYi00YmIwLThjYTMtNWZmOGVhMTVjODI3XkEyXkFqcGdeQXVyMTkwMDY2MDU@._V1_UX214_CR0,0,214,317_AL_.jpg" ,
     "https://images.mid-day.com/images/2016/sep/14-Prince-Narula.jpg"];

     users : Person[] = new Array();

// constructor of the class
  constructor(private router: Router) {
    for (var i= 0 ;i<this.name.length;i++){
      let persons =  new Person({"id":this.id[i],"name":this.name[i], "image" : this.image[i],
      "status" : this.status[i]});

      this.users.push(persons);


    }

    console.log(this.users);

  }

  ngOnInit(){

  }

// method to get object
    getObject(tempUsers) {
      console.log(tempUsers)


  }



}

//class person declaration
  class Person {
      public name: string = "default";
      public status: string = "default";
      public id: number = 0;
      public image : String = "default";

      public constructor(init?:Partial<Person>) {
          Object.assign(this, init);
      }
  }
