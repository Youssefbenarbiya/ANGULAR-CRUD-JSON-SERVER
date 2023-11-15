
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login, signup } from 'src/app/model.ts/joueurmodel';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  isshow=false;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }
  signupform!: FormGroup;
  loginform!: FormGroup;
  ngOnInit() {
    this.signupform=this.formBuilder.group({
      nom:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
    this.loginform=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signup(){
    this.isshow=true;
  }
  login(){
    this.isshow=false;
  }
  submitsignup(){
   
    this.http.post<signup>("http://localhost:3000/signup",this.signupform.value).subscribe((data)=>{
      alert("signup success");
      this.signupform.reset();
    })
  }
  loginUser() {
    
    this.http.get<login>("http://localhost:3000/signup").subscribe(data => {
      // Matching email and password
      const user = data.find((a: any) => {
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password;
      })
  
      // Check condition for login
      if (user !== undefined && user !== null) {
        alert("Login success");
        this.loginform.reset();
        this.router.navigate(['/menu']);
        // storing data in local storage
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        alert("Login failed");
        this.loginform.reset();
      }
    });
  }
  
  

}
