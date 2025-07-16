import { Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { RedsocialComponent } from './pages/redsocial/redsocial.component';


export const routes: Routes = [
    { path: '', redirectTo: '/produtos', pathMatch: 'full' },
    { path: 'contato', component: ContatoComponent },
    { path: 'produtos', component: ProdutosComponent },
    { path: 'redes-sociais', component: RedsocialComponent }
];
