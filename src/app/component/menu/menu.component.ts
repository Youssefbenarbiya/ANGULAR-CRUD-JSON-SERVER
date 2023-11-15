import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { contactezNous, joueur } from 'src/app/model.ts/joueurmodel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  data: joueur[] = []; // Initialize data as an empty array.
  searchText:any;
  constructor(private api: ApiService ,private formBuilder:FormBuilder) { }
  contacterNousForm!:FormGroup;
  ngOnInit() {
    this.getJoueur();
    this.contacterNousForm = this.formBuilder.group({
        nom: ['',Validators.required],
        email: ['',Validators.required],
        message: ['',Validators.required]
    });
  }

  getJoueur() {
    this.api.getJoueur().subscribe(res => {
      this.data = res;
    });
  }

  confirmDelete(id: number) {
    const confirmDelete = confirm("est ce que vous voulez supprimer ce joueur?");
    
    if (confirmDelete) {
      this.delete(id);
    }
  }

  // Delete method
  delete(id: number) {
    this.api.deleteJoueur(id).subscribe(res => {
      alert("Joueur supprimé avec succès!!");
      this.getJoueur();
    });
  }

  // contactez nous
  contacterNousSubmit(data:contactezNous){
    this.api.contactezNous(data).subscribe(res=>{
      alert("message envoyé avec succès");
      this.contacterNousForm.reset();
    })
  }
  
}
