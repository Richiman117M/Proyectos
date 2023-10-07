import { User } from './../../../interface/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TareaService } from 'src/app/services/tarea.service';
import { DetallesUserComponent } from '../detalles-user/detalles-user.component';
@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  name:string = '';
  private user: User = {
    id: 0,
    name: '',
    avatar: '',
    createdAt: '',
  };
  userForm: FormGroup | undefined;
  constructor(private fb: FormBuilder ,
              private dialogRef: MatDialogRef<NuevoUsuarioComponent>,
              private tareaService: TareaService,
              private dialog: MatDialog
              ) { }
  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
  guardarUsuario() {
    if(this.userForm){
    const nuevoUsuario: User = {name: this.name.toString() ,id: 0, avatar: '', createdAt: ''};
    this.tareaService.addItem(nuevoUsuario).subscribe(() => {
      console.log("Nuevo usuario guardado.");
      this.dialogRef.close(true);
    }, error =>{
      console.log("Error");
    });
    }
  }



  cerrarModal() {
    this.dialogRef.close(); 
  }
}
