import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formcontato',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formcontato.component.html',
  styleUrl: './formcontato.component.css',
  // Adicionando standalone: true para usar este componente de forma independente
})
export class FormcontatoComponent {

  contatoForm: FormGroup;//controlar os campos do formulário

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicializando o formulário com os campos e suas validações
    this.contatoForm = this.fb.group({//group é usado para agrupar os campos do formulário
      nome: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email]],  // ✅ CORRETO
      assunto: ['', Validators.required]

    })

  }

    voltarHome() {
      this.router.navigate(['']);
    }

    enviarformulario(){
      if (this.contatoForm.valid) {
        alert('Formulário enviado com sucesso!')
        this.contatoForm.reset(); // Reseta o formulário após o envio
       
      } else {
           alert('Formulário inválido. Por favor, verifique os campos.');

      }


    }
}
