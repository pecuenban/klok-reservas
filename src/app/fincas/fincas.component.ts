import { Component, OnInit } from '@angular/core';
import { ConexionesService } from '../conexiones.service';

@Component({
  selector: 'app-fincas',
  templateUrl: './fincas.component.html',
  styleUrls: ['./fincas.component.css']
})
export class FincasComponent implements OnInit {

  fincas:any;
  
  constructor(protected conexionesService: ConexionesService) { }

 
    ngOnInit() {
     this.conexionesService.getTest()
    .subscribe(
      (data) => { // Success
        this.fincas = data;
        console.log(data)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

