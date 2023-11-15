import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Router} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { joueur } from 'src/app/model.ts/joueurmodel';
@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styleUrls: ['./update-joueur.component.css']
})
export class UpdateJoueurComponent implements OnInit {
    id: any;
    joueurdata: joueur = {} as joueur;
  
    constructor(private api:ApiService, private activatedroute:ActivatedRoute, private route:Router) { }
  
    ngOnInit(): void {
      this.activatedroute.params.subscribe((param:Params)=>{
        this.id=param['id'];
        this.api.fetchdata(this.id).subscribe((data:joueur)=>{
          this.joueurdata=data;
          console.log(data);
        })
      })
    }
    update(){
      this.api.updateJoueur(this.id,this.joueurdata).subscribe((data:joueur)=>{
        alert("joueur updated");
        this.route.navigate(['/menu']);
      })
    }
}
