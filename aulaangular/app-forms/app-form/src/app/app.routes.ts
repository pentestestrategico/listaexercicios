import { Routes } from '@angular/router';
import { FormcontatoComponent } from './formcontato/formcontato/formcontato.component';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';


export const routes: Routes = [
    {path: 'forms', component: FormcontatoComponent},
    {path: 'cadastro', component: CadastroComponent}
];
