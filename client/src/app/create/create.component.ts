import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Poll } from '../poll';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  user;
  poll:Poll;
  constructor(private _service:UserService,private router:Router) { 
    this.user=new User();
    this.poll=new Poll();
    this.checksession();
  }
  checksession(){
    this._service.checksession((session)=>{
      console.log(`create${session}`);
      if(!session){
        this.router.navigate(["/"]);
      }
      this.user=session;
      console.log(this.user);


    });
  }
  addpoll(){
    this._service.addpoll(this.poll,()=>{
      console.log("faeffe")
      this.router.navigate(["/dashboard"]);
    })
  }
  ngOnInit() {
  }

}
