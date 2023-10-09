import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { Error404Component } from './components/error404/error404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuevoUsuarioComponent } from './components/home/nuevo-usuario/nuevo-usuario.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DetallesUserComponent } from './components/home/detalles-user/detalles-user.component';
import { CasasComponent } from './components/casas/casas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Error404Component,
    NuevoUsuarioComponent,
    DetallesUserComponent,
    CasasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
