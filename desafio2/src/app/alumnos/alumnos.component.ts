import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  
  forma = {
    'clase1 clase2': true
  };
  fijar() {
    this.forma['clase1 clase2'] = true;
  }

  eliminar() {
    this.forma['clase1 clase2'] = false;
  }

  public listadoalumnos = ['Marcos','Maria', 'Mario', 'Sofia', 'Luana', 'Samanta', 'Adriana', 'Dario', 'Venecia' , 'Amador' ];

  constructor (){}

  ngOnInit(): void {
      
  }
}
