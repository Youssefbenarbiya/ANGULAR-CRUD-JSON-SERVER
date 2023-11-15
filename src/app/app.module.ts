import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { AddJoueurComponent } from './component/add-joueur/add-joueur.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateJoueurComponent } from './component/update-joueur/update-joueur.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ServerErrorComponent } from './component/server-error/server-error.component';
import { FilterPipe } from './filter.pipe';
import { AdminloginSignupComponent } from './component/adminlogin-signup/adminlogin-signup.component';
import { AdminViewComponent } from './component/admin-view/admin-view.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddJoueurComponent,
    HeaderComponent,
    UpdateJoueurComponent,
    LoginSignupComponent,
    NotfoundComponent,
    ServerErrorComponent,
    FilterPipe,
    AdminloginSignupComponent,
    AdminViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
