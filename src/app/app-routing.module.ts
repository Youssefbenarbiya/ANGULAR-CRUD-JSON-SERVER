import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { AddJoueurComponent } from './component/add-joueur/add-joueur.component';
import { UpdateJoueurComponent } from './component/update-joueur/update-joueur.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { AuthGuard } from './shared/auth.guard';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ServerErrorComponent } from './component/server-error/server-error.component';
import { AdminloginSignupComponent } from './component/adminlogin-signup/adminlogin-signup.component';
import { AdminViewComponent } from './component/admin-view/admin-view.component';
import { adminauthGuard } from './adminauth.guard';

const routes: Routes = [
  {path:'menu', component: MenuComponent,canActivate: [AuthGuard]},
  {path:'addjoueur',component: AddJoueurComponent ,canActivate: [AuthGuard]},
  {path:'updateJoueur/:id',component:UpdateJoueurComponent ,canActivate: [AuthGuard]},
  {path:'adminlogin-signup',component:AdminloginSignupComponent},
  {path:'admin-view',component:AdminViewComponent,canActivate: [adminauthGuard]},
  {path:'login-signup',component:LoginSignupComponent},

  {path:'',redirectTo:'login-signup',pathMatch:'full'},
  
  {path:'server-error',component:ServerErrorComponent},
  
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
