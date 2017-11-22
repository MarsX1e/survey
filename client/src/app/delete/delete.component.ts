import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _service:UserService,private router:Router,private _route: ActivatedRoute) {
    this.delete();
   }
   delete(){
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this._service.delete(params.get('id'),()=>{
        this.router.navigate(['/dashboard'])
      })
 })
    
  }
  ngOnInit() {
  }

}
