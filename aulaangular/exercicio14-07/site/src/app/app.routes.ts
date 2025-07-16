import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PainelComponentComponent } from './pages/painel-component/painel-component.component';
import { PainelControleComponent } from './pages/painel-controle/painel-controle.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Rota para o formulário de login (página inicial)
  { path: '', component: PainelComponentComponent },
  { path: 'painel', component: PainelComponentComponent },
  
  // Todas as rotas protegidas - só acessíveis com autenticação
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [authGuard] // Guard que protege esta rota
  },
  { 
    path: 'sobre', 
    component: SobreComponent,
    canActivate: [authGuard] // Guard que protege esta rota
  },
  { 
    path: 'servico', 
    component: ServicoComponent,
    canActivate: [authGuard] // Guard que protege esta rota
  },
  { 
    path: 'contato', 
    component: ContatoComponent,
    canActivate: [authGuard] // Guard que protege esta rota
  },
  { 
    path: 'painel-controle', 
    component: PainelControleComponent,
    canActivate: [authGuard] // Guard que protege esta rota
  },
  
  // Rota padrão - redireciona para login se a rota não existir
  { path: '**', redirectTo: '' }
 ];
