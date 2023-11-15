import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adminSignup } from 'src/app/model.ts/joueurmodel';

@Component({
  selector: 'app-adminlogin-signup',
  templateUrl: './adminlogin-signup.component.html',
  styleUrls: ['./adminlogin-signup.component.css']
})
export class AdminloginSignupComponent implements OnInit {
  
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }
  showlogin: boolean = true;
  signupForm!: FormGroup; 
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      nom:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
    this.loginForm = this.formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  signuphere() {
    this.showlogin = false;
  }
  loginhere() {
    this.showlogin = true;
  }
  adminsignup(){
    this.http.post<adminSignup>('http://localhost:3000/adminsignup',this.signupForm.value).subscribe(
      (res)=>{
        const user = res;
        if(res){
          alert('Admin signup successful');
       
        }else{
          alert('Admin signup failed');
        }
        this.signupForm.reset({});
      },err=>{
        alert('Something went wrong');
        this.signupForm.reset({});
      }
    )
  }
  loginuser(){
    this.http.get<adminSignup[]>('http://localhost:3000/adminsignup').subscribe(
      (res: adminSignup[]) => {
        // matching
        const user = res.find((a: adminSignup) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        //checking condition
        if (user !== undefined) {
          alert('Admin login successful');
          this.router.navigate(['admin-view']);
          this.loginForm.reset();
          localStorage.setItem('adminlogin', JSON.stringify(user));
        } else {
          alert('Admin login failed');
          this.loginForm.reset();
        }
      })
  }
  
  
  
}