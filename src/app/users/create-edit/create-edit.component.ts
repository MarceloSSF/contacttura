import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-edit', 
  templateUrl: './create-edit.component.html', 
  styleUrls: ['./create-edit.component.css'], 
})
export class CreateEditUsersComponent implements OnInit {

  createEditForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),    
  });

  constructor() { }

  ngOnInit(): void {
  }

  createUser(){
    if(this.createEditForm.valid){
      Swal.fire({
        icon: 'success',
        title: 'Uhul',
        text: 'Usuário salvo com sucesso!',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'ops',
        text: 'Preencha os campos',
      });
    }
  }
}

export class SelectDisabledExample {
  disableSelect = new FormControl(false);
}
