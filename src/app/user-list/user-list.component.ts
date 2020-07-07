import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { UserManagmentService } from '../user-managment.service';  
import { Observable,Subject } from "rxjs";  
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from '../user';  
import { ResponseUser } from '../response-user';  
import { ResponseData } from '../response-data';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userManagmentService:UserManagmentService,public http:HttpClient) { }
    user : User=new User();  
    response_user : ResponseUser=new ResponseUser();  
    response_data : ResponseData=new ResponseData();  

  deleteMessage=false;  
  studentlist:any;  
  isupdated = false; 
  data :object     


  ngOnInit() {  
    this.isupdated=false;  
    // this.dtOptions = {  
    //   pageLength: 6,  
    //   stateSave:true,  
    //   lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
    //   processing: true  
    // };     
    this.userManagmentService.getUserList().subscribe((data) =>{  
    this.response_user =data;
    console.log(this.response_user);
    })  
  }  

  deleteUserhard(userId: String){  
    this.user=new User();     
    this.user.userId=userId;  
    this.delete();
  }


  delete() {  
    this.userManagmentService.deleteUser(this.user)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.userManagmentService.getUserList().subscribe((data) =>{  
            this.response_user =data;
            console.log(this.response_user);
            })  
                },  
        error => console.log(error));  
  }  
  
  updateUser(userNmae: String){  
    this.userManagmentService.getUserBYUserName(userNmae)  
      .subscribe(  
        data => {  
          this.response_user=data             
        },  
        error => console.log(error));  
  }  
  
  userDeatilsForm=new FormGroup({  
    userName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    password:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    firstName:new FormControl() ,
    lastName:new FormControl() ,
    pincode:new FormControl(),
    comapanyName:new FormControl() ,
    location:new FormControl() ,
    yearOfExperience:new FormControl(),
    dateOfBirth:new FormControl(),
    dateOfJoining:new FormControl(),
});  
  
  updateStu(updstu){  
    this.user=new User();     
    this.user.userName=this.userName.value;  
    this.user.email=this.email.value;  
    this.user.password=this.password.value;  
    this.user.firstName=this.firstName.value;  
    this.user.lastName=this.lastName.value;  
    this.user.pincode=this.pincode.value;  
    this.user.comapanyName=this.comapanyName.value;  
    this.user.location=this.location.value;  
    this.user.yearOfExperience=this.yearOfExperience.value;  
    this.user.dateOfBirth=this.dateOfBirth.value;  
    this.user.dateOfJoining=this.dateOfJoining.value;  
   console.log(this.userName.value);  
     
  
   this.userManagmentService.updateUser(this.user.userName,this.user).subscribe(  
    data => {       
      this.isupdated=true;  
      this.userManagmentService.getUserList().subscribe((data) =>{  
        this.response_user =data;
        console.log(this.response_user);
        })  
        },  
    error => console.log(error));  
  }  
  
  get userName(){  
    return this.userDeatilsForm.get('userName');  
  }  
  get password(){  
    return this.userDeatilsForm.get('password');  
  } 
  get firstName(){  
    return this.userDeatilsForm.get('firstName');  
  } 
  get lastName(){  
    return this.userDeatilsForm.get('lastName');  
  } 
  get email(){  
    return this.userDeatilsForm.get('email');  
  } 
  get pincode(){  
    return this.userDeatilsForm.get('pincode');  
  } 
  get dateOfBirth(){  
    return this.userDeatilsForm.get('dateOfBirth');  
  } 
  get dateOfJoining(){  
    return this.userDeatilsForm.get('dateOfJoining');  
  } 
  get comapanyName(){  
    return this.userDeatilsForm.get('comapanyName');  
  } 
  get location(){  
    return this.userDeatilsForm.get('location');  
  } 
  get yearOfExperience(){  
    return this.userDeatilsForm.get('yearOfExperience');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  
