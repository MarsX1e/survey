import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Poll } from '../poll';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll;
  constructor(private _service:UserService,private router:Router,private _route: ActivatedRoute) {
    this.checksession()
    this.poll=new Poll();
    this.getpoll()
;   }
  getpoll(){
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this._service.getpoll(params.get('id'),(data)=>{
        this.poll=data;
        console.log(this.poll);
      })
 })
  
  }
  checksession(){
    this._service.checksession((session)=>{
      console.log(`dashoboard${session}`);
      if(!session){
        console.log("aaaaaa");
        this.router.navigate(["/"]);
      }
      



    });
   

}
vote(option){
  console.log(this.poll[option]);
  this.poll[option].vote++;
  console.log(this.poll[option]);
  this._service.vote(this.poll,()=>{
    this.getpoll();
  });
}
ngOnInit() {
}
}