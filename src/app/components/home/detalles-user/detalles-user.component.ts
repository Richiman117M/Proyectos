import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-detalles-user',
  templateUrl: './detalles-user.component.html',
  styleUrls: ['./detalles-user.component.css']
})
export class DetallesUserComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

}
