import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _service:UserService,private router:Router) {
    this.logout();
   }

  logout(){
    this._service.logout(()=>{
      this.router.navigate(["/"])
    })
  }
  ngOnInit() {
  }

}
