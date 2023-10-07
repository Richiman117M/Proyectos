import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { MatDialog }from '@angular/material/dialog';
import { DetallesUserComponent } from './detalles-user/detalles-user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  constructor(private tareaService: TareaService, private dialog:MatDialog){}
  ngOnInit(){
    this.cargarUsuarios();
  }
  cargarUsuarios(){
    this.tareaService.getUsers().subscribe(users=>{
      this.users = users;
    });
  }
  verUsuario(userId: number){
    this.tareaService.getItem(userId).subscribe((user)=>{
      const dialogRef = this.dialog.open(DetallesUserComponent,{
        width:'400px',
        data:{user},
      });
    });
  }
  editarUsuario(id: number) {
    console.log(`Editando usuario con ID: ${id}`);
  }
  eliminarUsuario(id: number) {
    this.tareaService.deleteItem(id).subscribe(() => {
      console.log(`Usuario eliminado con éxito`);
      this.cargarUsuarios();
    });
  }
  crearNuevoUsuario() {
    const dialogRef = this.dialog.open(NuevoUsuarioComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cargarUsuarios();
      }
    });
  }
}
