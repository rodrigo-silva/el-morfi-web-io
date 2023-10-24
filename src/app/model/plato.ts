import { Ingrediente } from './ingrediente';

export class Plato {
  private _ingredientes: Map<Ingrediente, number>;

  constructor(public nombre: string) {
    this._ingredientes = new Map();
  }

  get ingredientes() {
    return this._ingredientes;
  }

  putIngrediente(ingrediente: Ingrediente, cantidad: number) {
    this._ingredientes.set(ingrediente, cantidad);
  }
}
