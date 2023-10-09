import { Component, OnInit } from '@angular/core';
import { Casa } from 'src/app/interface/casa';
import { CasasServiceService } from 'src/app/services/casas-service.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})
export class CasasComponent implements OnInit{

  casas: Casa[] = [];

  constructor(private casasService: CasasServiceService) { }

  ngOnInit(): void {
    this.casasService.obtenerCasas().subscribe((casas: Casa[]) => {
      this.casas = casas;
      console.log(this.casas);
      
    });
  }
}
