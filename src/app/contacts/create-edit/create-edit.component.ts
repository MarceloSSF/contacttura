import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditContactsComponent implements OnInit {

  createEditForm = new FormGroup({
    nome: new FormControl('',[Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,  Validators.email]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  createContact(){
    if(this.createEditForm.valid){
      Swal.fire({
        icon: 'success',
        title: 'Uhul',
        text: 'Salvo com Sucesso',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'ops',
        text: 'Preencha todos os campos',
      });
    }
  }
}
