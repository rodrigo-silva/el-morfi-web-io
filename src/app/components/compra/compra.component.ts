import { ApplicationService } from '../../service/application.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
  providers: [ApplicationService],
})
export class CompraComponent implements OnInit {
  semanaInicio: number = 1;
  diaInicio: number = 1;
  mananaInicio: boolean = false;

  semanaFin: number = 1;
  diaFin: number = 1;
  mananaFin: boolean = false;

  listado: Array<string> = [];

  loading = false;

  constructor(private service: ApplicationService) {}

  ngOnInit() {}

  generarCompra() {
    const ingredientes: string[] = [];
    this.loading = true;
    setTimeout(() => {
      const result = this.service
        .buildCompra(
          this.semanaInicio,
          this.diaInicio,
          this.mananaInicio,
          this.semanaFin,
          this.diaFin,
          this.mananaFin,
        )
        .forEach((v, k) => {
          ingredientes.push(`${k.nombre} ${v} ${k.unidad}`);
        });

      this.listado = [...this.service.getComunes(), ...ingredientes];
      this.copiarResultado(this.listado);

      this.loading = false;
    }, 300);
  }

  private copiarResultado(result: string[]): void {
    navigator.clipboard.writeText(this.listado.join('\n')).then(
      () => {
        console.log('Content copied to clipboard');
      },
      () => {
        console.error('Failed to copy');
      },
    );
  }
}
