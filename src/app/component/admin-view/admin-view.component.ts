import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { contactezNous } from 'src/app/model.ts/joueurmodel';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  data:contactezNous[]=[];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.showContactezNous();
  }
  showContactezNous(){
    this.api.displayContactezNous().subscribe(
      (res)=>{
        this.data=res;
        console.log(res);
      }
    )
  }
  delete(id:number){
    this.api.deletequery(id).subscribe(res=>{
      alert('Query deleted successfully');
      this.showContactezNous();
      });
    
    }
  logout(){
    localStorage.removeItem("adminlogin");
  }

}
