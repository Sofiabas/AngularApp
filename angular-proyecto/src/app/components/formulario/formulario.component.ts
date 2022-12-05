import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public miformulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.miformulario = new FormGroup({
      nombre: new FormControl('',Validators.minLength(4)),
      apellidos: new FormControl('',Validators.minLength(5)),
      email: new FormControl('',Validators.email)
    });
  }
  onSubmit(){
    console.warn(this.miformulario.value)
  }
}

