import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PainelComponentComponent } from './pages/painel-component/painel-component.component';
import { PainelControleComponent } from './pages/painel-controle/painel-controle.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Rota para a página inicial
  { path: '', component: HomeComponent },
  
  // Rotas das páginas públicas
  { path: 'sobre', component: SobreComponent },
  { path: 'servico', component: ServicoComponent },
  { path: 'contato', component: ContatoComponent },
  
  // Rota para o formulário de login (página pública)
  { path: 'painel', component: PainelComponentComponent },
  
  // Rota protegida - só acessível com autenticação
  { 
    path: 'painel-controle', 
    component: PainelControleComponent,
    canActivate: [authGuard] // Guard que protege esta rota
  },
  
  // Rota padrão - redireciona para home se a rota não existir
  { path: '**', redirectTo: '' }
 ];
