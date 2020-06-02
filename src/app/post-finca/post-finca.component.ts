import { Component, OnInit } from '@angular/core';
import { ConexionesService } from '../conexiones.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-finca',
  templateUrl: './post-finca.component.html',
  styleUrls: ['./post-finca.component.css']
})
export class PostFincaComponent implements OnInit {

finca:Finca = new Finca();
  constructor(protected conexionesService: ConexionesService) { }


formularioJuego = new FormGroup({
    Nombre: new FormControl("", Validators.required),
    Direccion: new FormControl("", Validators.required),
    Invitados: new FormControl("", Validators.required),
    Plan: new FormControl("", Validators.required)
  });

  ngOnInit() {
  }

  
  onSubmit(){
    this.conexionesService.postTest(this.finca).subscribe({
      next: data => this.respuesta(data), //this.estado = data.status,
      error: error => this.error(error) //this.estado = error
    });
  }
   error(error) {
    alert("Error desconocido");
    console.error(error);
  }
  respuesta(data) {
    alert("OK");
      console.log(data);
    
    //this.propagar.emit(false);
  }


}
export class Finca {
  public Nombre: string;
  public Invitados: number;
  public Direccion: string;
  public Plan: string;
  constructor() {
     this.Nombre = "";
 this.Invitados = 0;
 this.Direccion = "";
 this.Plan = "";
  }
  
}