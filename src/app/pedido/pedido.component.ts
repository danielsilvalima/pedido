import { Component, OnInit } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../service/pedido.service';
import { of } from 'rxjs';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [
    AccordionModule, CommonModule, MatIconModule, MatCardModule, MatInputModule, MatRadioModule
  ],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.scss'
})
export class PedidoComponent implements OnInit {
  pedidoId!: string;
  items: any[] = [];
  carrinhoCompras: any[] = [];

  constructor(private route: ActivatedRoute, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.pedidoId = id;
        //alert(this.pedidoId);
        this.pedidoService.list(this.pedidoId).subscribe({
          next: (result) => {
            //console.log(result[0].categorias);
            this.items = result[0].categorias;
          },
          error: (e) => {
            /*this.snackBar.open('Falha', e, {
              duration: 3000
            });*/
            return of ([])
          },
        });
      }
    })}
  }


