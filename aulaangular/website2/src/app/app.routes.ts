import { Routes } from '@angular/router';
import { ContatoComponent } from './paginas/contato/contato.component';
import { HomeComponent } from './paginas/home/home.component';
import { PedidoComponent } from './paginas/pedido/pedido.component';
import { SobreComponent } from './paginas/sobre/sobre.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'contato',component:ContatoComponent},
    {path:'pedido',component:PedidoComponent},
    {path:'sobre',component:SobreComponent},
];
