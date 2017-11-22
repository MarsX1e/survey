import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User;
  polls;
  constructor(private _service:UserService,private router:Router) { 
    this.user=new User();
    this.checksession();
    this.polls=[];
    this.getpolls();
  }
  checksession(){
    this._service.checksession((session)=>{
      console.log(`dashoboard${session}`);
      if(!session){
        console.log("aaaaaa");
        this.router.navigate(["/"]);
      }
      this.user=session;
      console.log(this.user);


    });
  }
  getpolls(){
    this._service.getpolls((data)=>{
      this.polls=data;
      console.log(this.polls);
    })
  }
  
  pollinfo(index){
    console.log(index);
  }
  ngOnInit() {
  }

}
