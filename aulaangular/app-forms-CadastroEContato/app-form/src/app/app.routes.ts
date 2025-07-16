import { Routes } from '@angular/router';
import { FormcontatoComponent } from './formcontato/formcontato/formcontato.component';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contato', component: FormcontatoComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', redirectTo: ''}
];
