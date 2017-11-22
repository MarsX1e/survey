import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user:User;
  constructor(private _service:UserService,private route:Router) { 
    this.user=new User();
    console.log(this.user);
    console.log(this._service.session);
  }
  adduser(){
    console.log(this.user);
    this._service.adduser(this.user,()=>{
      this.route.navigate(['dashboard']);
    });
  }
  ngOnInit() {
  }

}
