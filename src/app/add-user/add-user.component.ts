import { Component, OnInit } from '@angular/core';
import { UserManagmentService } from '../user-managment.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { User } from '../user';  


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userManagementService:UserManagmentService){ }

  user : User=new User();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
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
  
  saveUser(saveUser){  
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
    this.submitted = true;  
    this.save();  
  }  
  
    save() {                    
    this.userManagementService.createUser(this.user)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.user = new User();  
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

  
  addUserDetailsForm(){  
    this.submitted=false;  
    this.userDeatilsForm.reset();  
  }  
}  
