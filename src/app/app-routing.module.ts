import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { CasasComponent } from './components/casas/casas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'casas', component: CasasComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
