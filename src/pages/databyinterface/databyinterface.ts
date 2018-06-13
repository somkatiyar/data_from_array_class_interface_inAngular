//import statement
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//component declaration
@Component({
  selector: 'app-databyinterface',
  templateUrl: './databyinterface.html',
  styleUrls: ['./databyinterface.css']
})

//class declaration
export class DataByInterface implements OnInit{
  title = 'app';
  details = {};
  failedLogin = false;
//array declaration
     name =['Jhon','david','robert','julia','prince'];
     id = [1,2,3,4,5];
     status = ["Active" ,"Unavailable" ,"Hide" ,"Active","Active"];
     image = ["https://m.media-amazon.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_UY317_CR25,0,214,317_AL_.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/David_Leitch_2014.jpg/1200px-David_Leitch_2014.jpg" ,
     "https://m.media-amazon.com/images/M/MV5BMTk1Nzc5MzQyMV5BMl5BanBnXkFtZTcwNjQ5OTA0Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg" ,
      "https://m.media-amazon.com/images/M/MV5BNGNiN2ZjZGMtZjZmYi00YmIwLThjYTMtNWZmOGVhMTVjODI3XkEyXkFqcGdeQXVyMTkwMDY2MDU@._V1_UX214_CR0,0,214,317_AL_.jpg" ,
     "https://images.mid-day.com/images/2016/sep/14-Prince-Narula.jpg"];
     users : Person[] = new Array();
//constructor of the class
    constructor(private router: Router) {
      for (var i= 0 ;i<this.name.length;i++){
      let persons = new Person(this.id[i],this.name[i],this.status[i],this.image[i]);
    //  this.users.push(persons);
      console.log(persons);
      this.users.push(persons);
    }

  }
  ngOnInit(){
  }
}

//class person declaration
class Person implements IPerson {
    constructor (public id:number,public name:string, public status: string, public image:string) {}
}
//interface declaration
interface IPerson  {
    id: number;
    name: string;
    status: string;
    image : string;
  }
