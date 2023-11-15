import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { joueur } from 'src/app/model.ts/joueurmodel';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {
  joueurform:FormGroup | any;
  constructor(private fb:FormBuilder, private router:Router, private api:ApiService) {} 

   ngOnInit(): void {
    this.joueurform = this.fb.group({
      email: ['',Validators.required],
      nom: ['',Validators.required],
      Prenom: ['',Validators.required],
      Nationalite: ['',Validators.required],
      Numero: ['',Validators.required],
      Position: ['',Validators.required]
    })

  }
  submitjoueur(data:joueur){
    //console.log(this.joueurform.value);
    this.api.addJoueur(data).subscribe((res=>{ 
      this.joueurform.reset();
      this.router.navigate(["/menu"])
  }))
}
}