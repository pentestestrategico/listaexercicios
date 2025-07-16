import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  cadastroForm: FormGroup;//controlar os campos do formulário

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicializando o formulário com os campos e suas validações
    this.cadastroForm = this.fb.group({//group é usado para agrupar os campos do formulário
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],  // ✅ CORRETO
      senha: ['', [Validators.required, Validators.minLength(6)]], // Senha com mínimo de 6 caracteres
      confirmarSenha: ['', Validators.required],
      dataNascimento: ['', Validators.required], // Data de nascimento obrigatória
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]] // Telefone com 10 ou 11 dígitos

    })

  }

  voltarHome() {
    this.router.navigate(['']);
  }

  enviarCadastro() {
    if (this.cadastroForm.valid) {
      if (this.cadastroForm.value.senha !== this.cadastroForm.value.confirmarSenha) {
        alert('As senhas não coincidem. Por favor, verifique.');
      } else {
        alert('Formulário enviado com sucesso!')
        this.cadastroForm.reset(); // Reseta o formulário após o envio
      }
    } else {
      alert('Formulário inválido. Por favor, verifique os campos.');

    }


  }
}