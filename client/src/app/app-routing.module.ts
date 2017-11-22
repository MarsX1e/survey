import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';
import { DeleteComponent } from './delete/delete.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:IndexComponent
  },
   {
    path:"dashboard",
    pathMatch:"full",
    component:HomeComponent
  },
  {
    path:"create",
    pathMatch:"full",
    component:CreateComponent
  },
  {
    path:"poll/:id",
    pathMatch:"full",
    component:PollComponent
  },
  {
    path:"delete/:id",
    pathMatch:"full",
    component:DeleteComponent
  },
  {
    path:"logout",
    pathMatch:"full",
    component:LogoutComponent
  },
  {
    path:"**",
    pathMatch:"full",
    redirectTo:"/dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
