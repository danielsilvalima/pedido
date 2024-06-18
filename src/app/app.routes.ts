import { Routes } from '@angular/router';
import { PedidoComponent } from './pedido/pedido.component';

export const routes: Routes = [
  { path: ':id', component: PedidoComponent }, // Rota dinâmica para receber o ID
  //{ path: '', redirectTo: 'default-id', pathMatch: 'full' }
];
