import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {
session;
poll;
  constructor(private _http:Http) { }
  checksession(cb){
    if(this.session){
      cb(this.session);
    }
    else{
      this._http.get("/getsession").subscribe((response)=>{
        this.session=response.json().user;
        console.log(this.session);
        console.log("checkdone");
        cb(this.session);  
    
    

})
}
}
delete(id,callback){
  console.log(`service ${id}`);
  this._http.get("/delete/"+id).subscribe((response)=>{
    console.log("delete done");
    console.log(response.json().error)
    callback();
  })
}
adduser(user:User,callback){
  console.log(`service ${user}`);
  this._http.post("/adduser",user).subscribe((response)=>{
    console.log(response.json());
    console.log(response.json().user);
    this.session=response.json().user;
    console.log(`this.session${this.session}`);
    callback();
  })
}
addpoll(poll,callback){
  console.log(`service ${poll}`);
  this._http.post("/addpoll",poll).subscribe((response)=>{
    console.log("poll add done");
    console.log(response.json().error)
    callback();
  })
}
getpolls(callback){
  console.log(`service`);
  this._http.get("/getpolls").subscribe((response)=>{
    console.log(response.json().polls);
    callback(response.json().polls);
  })
}
getpoll(id,callback){
  console.log(`service`);
  this._http.get("/getpoll/"+id).subscribe((response)=>{
    console.log(response.json().poll);
    callback(response.json().poll);
  })
}
vote(poll,callback){
  console.log(`service`);
  this._http.post("/vote",poll).subscribe((response)=>{
    console.log(response.json().error);
    callback();
  })
}
logout(callback){
  console.log(`service`);
  this._http.get("/logout").subscribe((response)=>{
    console.log(response.json().error);
    callback();
  })
}
}
