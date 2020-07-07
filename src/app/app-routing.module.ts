import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'view-user', pathMatch: 'full' },  
  { path: 'view-user', component: UserListComponent },  
  { path: 'add-user', component: AddUserComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
