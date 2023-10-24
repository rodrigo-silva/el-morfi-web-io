import { Injectable } from '@angular/core';
import { Ingrediente } from '../model/ingrediente';
import { Plato } from '../model/plato';
import { InMemoryDbService } from './in-memory-db.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private db: InMemoryDbService) {}

  public buildCompra(
    semana: number,
    dia: number,
    maniana: boolean,
    semana2: number,
    dia2: number,
    maniana2: boolean,
  ): Map<Ingrediente, number> {
    let from = (semana - 1) * 14 + dia * 2 - 2;
    if (!maniana) {
      from++;
    }

    let to = (semana2 - 1) * 14 + dia2 * 2 - 2;
    to++;
    if (!maniana2) {
      to++;
    }
    return this.getCompra(from, to);
  }

  public getComunes(): Array<string> {
    return this.db.getComunes();
  }

  public getMenu(): Array<Plato> {
    return this.db.getMenu();
  }

  /**
   *
   */
  private getCompra(from: number, to: number): Map<Ingrediente, number> {
    const listaPlatos: Array<Plato> = this.createPlatosList(from, to);
    return this.bildIngredientesMap(listaPlatos);
  }

  /**
   *
   */
  private createPlatosList(from: number, to: number): Array<Plato> {
    const menu = this.db.getMenu();
    if (from < to) {
      return menu.slice(from, to);
    } else {
      const subList = menu.slice(from, menu.length);
      return [...subList, ...menu.slice(0, to)];
    }
  }

  private bildIngredientesMap(platos: Array<Plato>): Map<Ingrediente, number> {
    const ingredientesMap = new Map<Ingrediente, number>();

    platos.forEach((plato) => {
      plato.ingredientes.forEach((v, k) => {
        const cantidad = ingredientesMap.get(k) ?? 0;
        ingredientesMap.set(k, cantidad + v);
      });
    });

    return ingredientesMap;
  }
}
