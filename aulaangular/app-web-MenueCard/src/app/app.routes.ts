import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';



export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'sobre',component:SobreComponent},
    {path:'contato',component:ContatoComponent},
    {path:'produto',component:ProdutosComponent},

];
