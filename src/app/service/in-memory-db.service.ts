import { Injectable } from '@angular/core';
import { Ingrediente } from '../model/ingrediente';
import { Plato } from '../model/plato';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDbService {
  constructor() {}

  getMenu(): Array<Plato> {
    return this.menuSummer();
  }

  getComunes(): Array<string> {
    return [
      'Algohodon',
      'Dentrifico sensodyne',
      'Detifrico chicos',
      'Hisopos',
      'Glade',
      'desodorante',
      '----------------',
      'Jabon dove',
      'Shampoo',
      'Crema de enjuague',
      'Shampoo pekes',
      'Jabon de tocador',
      'Papel higienico',
      'Pañuelos de caja',
      '----------------',
      'Trapos',
      'Detergente',
      'Virulana',
      'Esponja',
      'Bolsa residuo',
      'Limpia piso',
      'Guantes',
      'Jabon ropa',
      'jabon de ropa suaaaave',
      'Bolsitas cocina',
      'Papel del rollo',
      '-------------------',
      'Yerba',
      'Nesquik',
      'Servilletas',
      'Galles',
      'mate cocido',
      'Galles sin tacc',
      'Mermeladas',
      'Dulce de leche',
      'miel',
      'Queso rallado',
      'AGua',
      'pan',
      'Maiz',
      'Pan de hamburguesa',
      'Papas Mc Cain',
      'Gatorade',
      '----------------',
      'Limon',
      'Juguitos',
      'Sal gruesa',
      'Sal',
      'Mani',
      '----------------',
      'Mayonesa',
      'ketchup',
      'mostaza sin tacc',
      'Aceite oliva',
      'aceto',
      'Aceite',
      'Cafe',
      'Ajo',
      'Manteca',
      'Leche',
      'CasanCrem',
      'vino blanco cocinar',
      'Lo vino',
      '----------------',
    ];
  }

  getAllPlatos(): Map<string, Plato> {
    const platos = new Map();

    let platoTemp;

    platoTemp = new Plato(this.OMELETE);
    platoTemp.putIngrediente(Ingrediente.QUESO_MANTECOSO, 250);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 1);
    platoTemp.putIngrediente(Ingrediente.LECHUGA, 0.5);
    platoTemp.putIngrediente(Ingrediente.JAMON, 100);
    platoTemp.putIngrediente(Ingrediente.HUEVO, 7);
    platoTemp.putIngrediente(Ingrediente.TOMATE, 2);
    platos.set(this.OMELETE, platoTemp);

    platoTemp = new Plato(this.PATITAS);
    platoTemp.putIngrediente(Ingrediente.PATITAS, 360);
    platoTemp.putIngrediente(Ingrediente.ZAPALLO, 1);
    platos.set(this.PATITAS, platoTemp);

    platoTemp = new Plato(this.TORTILLA_ATUN);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 2);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 1);
    platoTemp.putIngrediente(Ingrediente.LECHUGA, 0.5);
    platoTemp.putIngrediente(Ingrediente.ATUN, 2);
    platoTemp.putIngrediente(Ingrediente.VERDEO, 1);
    platoTemp.putIngrediente(Ingrediente.HUEVO, 4);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platoTemp.putIngrediente(Ingrediente.TOMATE, 2);
    platos.set(this.TORTILLA_ATUN, platoTemp);

    platoTemp = new Plato(this.PECHUGAS_SALTEADAS);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 2);
    platoTemp.putIngrediente(Ingrediente.ARROZ, 150);
    platoTemp.putIngrediente(Ingrediente.PECHUGA, 3);
    platoTemp.putIngrediente(Ingrediente.QUINOA, 150);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platos.set(this.PECHUGAS_SALTEADAS, platoTemp);

    platoTemp = new Plato(this.SOPA);
    platoTemp.putIngrediente(Ingrediente.ZAPALLO, 0.5);
    platoTemp.putIngrediente(Ingrediente.CHOCLO, 2);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 1);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 2);
    platoTemp.putIngrediente(Ingrediente.APIO, 1);
    platoTemp.putIngrediente(Ingrediente.ACELGA, 0.5);
    platos.set(this.SOPA, platoTemp);

    platoTemp = new Plato(this.EMPANADAS_ATUN);
    platoTemp.putIngrediente(Ingrediente.TAPAS_TACC, 0.3);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 2);
    platoTemp.putIngrediente(Ingrediente.ATUN, 2);
    platoTemp.putIngrediente(Ingrediente.TAPAS, 0.6);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platoTemp.putIngrediente(Ingrediente.HUEVO, 3);
    platos.set(this.EMPANADAS_ATUN, platoTemp);

    platoTemp = new Plato(this.MILAS_ENSALADA);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 1);
    platoTemp.putIngrediente(Ingrediente.MILAS, 7);
    platoTemp.putIngrediente(Ingrediente.LECHUGA, 0.5);
    platoTemp.putIngrediente(Ingrediente.TOMATE, 2);
    platos.set(this.MILAS_ENSALADA, platoTemp);

    platoTemp = new Plato(this.GUISO);
    platoTemp.putIngrediente(Ingrediente.LENTEJAS, 250);
    platoTemp.putIngrediente(Ingrediente.ZAPALLO, 0.5);
    platoTemp.putIngrediente(Ingrediente.PURE_TOMATE, 1);
    platoTemp.putIngrediente(Ingrediente.PAPA, 1);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 2);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 2);
    platoTemp.putIngrediente(Ingrediente.PANCETA, 100);
    platoTemp.putIngrediente(Ingrediente.CHORIZO_COLORAO, 0.5);
    platos.set(this.GUISO, platoTemp);

    platoTemp = new Plato(this.MUSLO_MOSTAZA);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 1);
    platoTemp.putIngrediente(Ingrediente.PAPA, 2);
    platoTemp.putIngrediente(Ingrediente.PATA_MUSLO, 4);
    platos.set(this.MUSLO_MOSTAZA, platoTemp);

    platoTemp = new Plato(this.BASTONES_MERLUZA);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 1);
    platoTemp.putIngrediente(Ingrediente.BASTONES_MERLUZA, 750);
    platoTemp.putIngrediente(Ingrediente.LECHUGA, 0.5);
    platoTemp.putIngrediente(Ingrediente.TOMATE, 2);
    platos.set(this.BASTONES_MERLUZA, platoTemp);

    platoTemp = new Plato(this.HAMBURGUESAS_BIFES);
    platoTemp.putIngrediente(Ingrediente.MC_CAIN, 0.5);
    platoTemp.putIngrediente(Ingrediente.PICADA, 200);
    platoTemp.putIngrediente(Ingrediente.PAN_SANGUCHE, 2);
    platoTemp.putIngrediente(Ingrediente.BIFE_CHORIZO, 3);
    platoTemp.putIngrediente(Ingrediente.TOMATE, 1);
    platos.set(this.HAMBURGUESAS_BIFES, platoTemp);

    platoTemp = new Plato(this.CARNE_HORNO);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 2);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 2);
    platoTemp.putIngrediente(Ingrediente.PAPA, 2);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platoTemp.putIngrediente(Ingrediente.CARNE_HORNO, 500);
    platos.set(this.CARNE_HORNO, platoTemp);

    platoTemp = new Plato(this.TORTILLA_ZAPALLITOS);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 1);
    platoTemp.putIngrediente(Ingrediente.QUESO_MANTECOSO, 200);
    platoTemp.putIngrediente(Ingrediente.ZAPALLITO, 3);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 1);
    platoTemp.putIngrediente(Ingrediente.LECHUGA, 0.5);
    platoTemp.putIngrediente(Ingrediente.JAMON, 200);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platoTemp.putIngrediente(Ingrediente.TOMATE, 2);
    platoTemp.putIngrediente(Ingrediente.HUEVO, 4);
    platos.set(this.TORTILLA_ZAPALLITOS, platoTemp);

    platoTemp = new Plato(this.ARROZ_ATUN);
    platoTemp.putIngrediente(Ingrediente.PURE_TOMATE, 1);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 1);
    platoTemp.putIngrediente(Ingrediente.ARROZ, 150);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 1);
    platoTemp.putIngrediente(Ingrediente.QUINOA, 150);
    platoTemp.putIngrediente(Ingrediente.ATUN, 1);
    platos.set(this.ARROZ_ATUN, platoTemp);

    platoTemp = new Plato(this.PASTEL_CARNE);
    platoTemp.putIngrediente(Ingrediente.PAPA, 3);
    platoTemp.putIngrediente(Ingrediente.ACEITUNA, 1);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 2);
    platoTemp.putIngrediente(Ingrediente.PICADA, 500);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platoTemp.putIngrediente(Ingrediente.HUEVO, 3);
    platos.set(this.PASTEL_CARNE, platoTemp);

    platoTemp = new Plato(this.CERDO_CHINO);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 2);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 2);
    platoTemp.putIngrediente(Ingrediente.CERDO, 500);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platos.set(this.CERDO_CHINO, platoTemp);

    platoTemp = new Plato(this.PECHUGAS_RELLENAS);
    platoTemp.putIngrediente(Ingrediente.ARROZ, 150);
    platoTemp.putIngrediente(Ingrediente.PECHUGA, 2);
    platoTemp.putIngrediente(Ingrediente.QUINOA, 150);
    platoTemp.putIngrediente(Ingrediente.JAMON, 200);
    platoTemp.putIngrediente(Ingrediente.QUESO_MAQUINA, 250);
    platos.set(this.PECHUGAS_RELLENAS, platoTemp);

    platoTemp = new Plato(this.FAJITAS);
    platoTemp.putIngrediente(Ingrediente.RAPIDITAS, 1);
    platoTemp.putIngrediente(Ingrediente.CARNE_SALTEADO, 400);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 2);
    platoTemp.putIngrediente(Ingrediente.PALTA, 2);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 2);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platoTemp.putIngrediente(Ingrediente.TOMATE, 1);
    platos.set(this.FAJITAS, platoTemp);

    platoTemp = new Plato(this.MERLUZA_CACEROLA);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 2);
    platoTemp.putIngrediente(Ingrediente.PAPA, 2);
    platoTemp.putIngrediente(Ingrediente.MERLUZA, 4);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platos.set(this.MERLUZA_CACEROLA, platoTemp);

    platoTemp = new Plato(this.BOLOGNESA);
    platoTemp.putIngrediente(Ingrediente.PURE_TOMATE, 1);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 1);
    platoTemp.putIngrediente(Ingrediente.FIDEOS, 300);
    platoTemp.putIngrediente(Ingrediente.FIDEOS_TACC, 100);
    platoTemp.putIngrediente(Ingrediente.PICADA, 250);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platos.set(this.BOLOGNESA, platoTemp);

    platoTemp = new Plato(this.MILAS_MERLUZA);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 1);
    platoTemp.putIngrediente(Ingrediente.MERLUZA, 5);
    platoTemp.putIngrediente(Ingrediente.LECHUGA, 0.5);
    platoTemp.putIngrediente(Ingrediente.TOMATE, 2);
    platos.set(this.MILAS_MERLUZA, platoTemp);

    platoTemp = new Plato(this.DELIVERY);
    platos.set(this.DELIVERY, platoTemp);

    platoTemp = new Plato(this.REVUELTO);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 1);
    platoTemp.putIngrediente(Ingrediente.ARROZ, 150);
    platoTemp.putIngrediente(Ingrediente.ZAPALLITO, 2);
    platoTemp.putIngrediente(Ingrediente.QUINOA, 150);
    platoTemp.putIngrediente(Ingrediente.HUEVO, 4);
    platos.set(this.REVUELTO, platoTemp);

    platoTemp = new Plato(this.ARROZ_CHINO);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 2);
    platoTemp.putIngrediente(Ingrediente.ARROZ, 150);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 1);
    platoTemp.putIngrediente(Ingrediente.ZAPALLITO, 3);
    platoTemp.putIngrediente(Ingrediente.QUINOA, 150);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platoTemp.putIngrediente(Ingrediente.HUEVO, 3);
    platos.set(this.ARROZ_CHINO, platoTemp);

    platoTemp = new Plato(this.ENSALADA_GALLEGA);
    platoTemp.putIngrediente(Ingrediente.TOMATE, 2);
    platoTemp.putIngrediente(Ingrediente.ATUN, 2);
    platoTemp.putIngrediente(Ingrediente.LECHUGA, 0.5);
    platoTemp.putIngrediente(Ingrediente.ZANAHORIA, 1);
    platoTemp.putIngrediente(Ingrediente.FIDEOS, 200);
    platoTemp.putIngrediente(Ingrediente.PALTA, 1);
    platos.set(this.ENSALADA_GALLEGA, platoTemp);

    platoTemp = new Plato(this.ZAPALLITOS_TUCO);
    platoTemp.putIngrediente(Ingrediente.ZAPALLITO, 2);
    platoTemp.putIngrediente(Ingrediente.PURE_TOMATE, 0.5);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 1);
    platoTemp.putIngrediente(Ingrediente.QUESO_MANTECOSO, 200);
    platoTemp.putIngrediente(Ingrediente.ARROZ, 200);
    platos.set(this.ZAPALLITOS_TUCO, platoTemp);

    platoTemp = new Plato(this.ARROZ_HONGOS);
    platoTemp.putIngrediente(Ingrediente.ARROZ, 200);
    platoTemp.putIngrediente(Ingrediente.VERDEO, 2);
    platoTemp.putIngrediente(Ingrediente.HONGOS, 0.5);
    platos.set(this.ARROZ_HONGOS, platoTemp);

    platoTemp = new Plato(this.POLLO_VERDEO);
    platoTemp.putIngrediente(Ingrediente.PECHUGA, 500);
    platoTemp.putIngrediente(Ingrediente.VERDEO, 4);
    platoTemp.putIngrediente(Ingrediente.CEBOLLA, 1);
    platoTemp.putIngrediente(Ingrediente.MORRON, 1);
    platoTemp.putIngrediente(Ingrediente.ARROZ, 400);
    platos.set(this.POLLO_VERDEO, platoTemp);

    platoTemp = new Plato(this.POLLO_PLANCHA);
    platoTemp.putIngrediente(Ingrediente.POLLO, 400);
    platoTemp.putIngrediente(Ingrediente.PAPA, 2);
    platos.set(this.POLLO_PLANCHA, platoTemp);

    return platos;
  }

  private menuWinter(): Array<Plato> {
    const losPlatos = this.getAllPlatos();
    return [
      losPlatos.get(this.BASTONES_MERLUZA)!,
      losPlatos.get(this.SOPA)!,
      losPlatos.get(this.CERDO_CHINO)!,
      losPlatos.get(this.SOPA)!,
      losPlatos.get(this.MILAS_ENSALADA)!,
      losPlatos.get(this.ARROZ_ATUN)!,
      losPlatos.get(this.ARROZ_CHINO)!,
      losPlatos.get(this.OMELETE)!,
      losPlatos.get(this.REVUELTO)!,
      losPlatos.get(this.HAMBURGUESAS_BIFES)!,
      losPlatos.get(this.MILAS_MERLUZA)!,
      losPlatos.get(this.FAJITAS)!,
      losPlatos.get(this.PASTEL_CARNE)!,
      losPlatos.get(this.EMPANADAS_ATUN)!,

      losPlatos.get(this.PATITAS)!,
      losPlatos.get(this.GUISO)!,
      losPlatos.get(this.PECHUGAS_SALTEADAS)!,
      losPlatos.get(this.GUISO)!,
      losPlatos.get(this.MILAS_ENSALADA)!,
      losPlatos.get(this.BOLOGNESA)!,
      losPlatos.get(this.TORTILLA_ATUN)!,
      losPlatos.get(this.OMELETE)!,
      losPlatos.get(this.TORTILLA_ZAPALLITOS)!,
      losPlatos.get(this.HAMBURGUESAS_BIFES)!,
      losPlatos.get(this.MERLUZA_CACEROLA)!,
      losPlatos.get(this.DELIVERY)!,
      losPlatos.get(this.OMELETE)!,
      losPlatos.get(this.EMPANADAS_ATUN)!,

      losPlatos.get(this.BASTONES_MERLUZA)!,
      losPlatos.get(this.SOPA)!,
      losPlatos.get(this.CERDO_CHINO)!,
      losPlatos.get(this.SOPA)!,
      losPlatos.get(this.MILAS_ENSALADA)!,
      losPlatos.get(this.ARROZ_ATUN)!,
      losPlatos.get(this.ARROZ_CHINO)!,
      losPlatos.get(this.OMELETE)!,
      losPlatos.get(this.TORTILLA_ZAPALLITOS)!,
      losPlatos.get(this.HAMBURGUESAS_BIFES)!,
      losPlatos.get(this.MILAS_MERLUZA)!,
      losPlatos.get(this.CARNE_HORNO)!,
      losPlatos.get(this.MUSLO_MOSTAZA)!,
      losPlatos.get(this.EMPANADAS_ATUN)!,

      losPlatos.get(this.PATITAS)!,
      losPlatos.get(this.GUISO)!,
      losPlatos.get(this.PECHUGAS_SALTEADAS)!,
      losPlatos.get(this.GUISO)!,
      losPlatos.get(this.MILAS_ENSALADA)!,
      losPlatos.get(this.BOLOGNESA)!,
      losPlatos.get(this.TORTILLA_ATUN)!,
      losPlatos.get(this.OMELETE)!,
      losPlatos.get(this.TORTILLA_ZAPALLITOS)!,
      losPlatos.get(this.HAMBURGUESAS_BIFES)!,
      losPlatos.get(this.MERLUZA_CACEROLA)!,
      losPlatos.get(this.DELIVERY)!,
      losPlatos.get(this.PECHUGAS_RELLENAS)!,
      losPlatos.get(this.EMPANADAS_ATUN)!,
    ];
  }

  private menuSummer(): Array<Plato> {
    const losPlatos = this.getAllPlatos();
    return [
      losPlatos.get(this.BASTONES_MERLUZA)!,
      losPlatos.get(this.REVUELTO)!,
      losPlatos.get(this.ENSALADA_GALLEGA)!,
      losPlatos.get(this.CERDO_CHINO)!,
      losPlatos.get(this.MILAS_ENSALADA)!,
      losPlatos.get(this.ARROZ_ATUN)!,
      losPlatos.get(this.ARROZ_CHINO)!,
      losPlatos.get(this.OMELETE)!,
      losPlatos.get(this.ARROZ_HONGOS)!,
      losPlatos.get(this.HAMBURGUESAS_BIFES)!,
      losPlatos.get(this.MILAS_MERLUZA)!,
      losPlatos.get(this.FAJITAS)!,
      losPlatos.get(this.PASTEL_CARNE)!,
      losPlatos.get(this.EMPANADAS_ATUN)!,

      losPlatos.get(this.PATITAS)!,
      losPlatos.get(this.ZAPALLITOS_TUCO)!,
      losPlatos.get(this.ENSALADA_GALLEGA)!,
      losPlatos.get(this.POLLO_VERDEO)!,
      losPlatos.get(this.MILAS_ENSALADA)!,
      losPlatos.get(this.BOLOGNESA)!,
      losPlatos.get(this.TORTILLA_ATUN)!,
      losPlatos.get(this.OMELETE)!,
      losPlatos.get(this.ARROZ_HONGOS)!,
      losPlatos.get(this.HAMBURGUESAS_BIFES)!,
      losPlatos.get(this.MERLUZA_CACEROLA)!,
      losPlatos.get(this.DELIVERY)!,
      losPlatos.get(this.OMELETE)!,
      losPlatos.get(this.EMPANADAS_ATUN)!,

      losPlatos.get(this.BASTONES_MERLUZA)!,
      losPlatos.get(this.TORTILLA_ZAPALLITOS)!,
      losPlatos.get(this.ENSALADA_GALLEGA)!,
      losPlatos.get(this.CERDO_CHINO)!,
      losPlatos.get(this.MILAS_ENSALADA)!,
      losPlatos.get(this.ARROZ_ATUN)!,
      losPlatos.get(this.ARROZ_CHINO)!,
      losPlatos.get(this.OMELETE)!,
      losPlatos.get(this.ARROZ_HONGOS)!,
      losPlatos.get(this.HAMBURGUESAS_BIFES)!,
      losPlatos.get(this.MILAS_MERLUZA)!,
      losPlatos.get(this.CARNE_HORNO)!,
      losPlatos.get(this.MUSLO_MOSTAZA)!,
      losPlatos.get(this.EMPANADAS_ATUN)!,

      losPlatos.get(this.PATITAS)!,
      losPlatos.get(this.ZAPALLITOS_TUCO)!,
      losPlatos.get(this.ENSALADA_GALLEGA)!,
      losPlatos.get(this.POLLO_VERDEO)!,
      losPlatos.get(this.MILAS_ENSALADA)!,
      losPlatos.get(this.BOLOGNESA)!,
      losPlatos.get(this.TORTILLA_ATUN)!,
      losPlatos.get(this.OMELETE)!,
      losPlatos.get(this.ARROZ_HONGOS)!,
      losPlatos.get(this.HAMBURGUESAS_BIFES)!,
      losPlatos.get(this.MERLUZA_CACEROLA)!,
      losPlatos.get(this.DELIVERY)!,
      losPlatos.get(this.POLLO_PLANCHA)!,
      losPlatos.get(this.EMPANADAS_ATUN)!,
    ];
  }

  private readonly OMELETE = 'Omelete con ensalada';
  private readonly PATITAS = 'Patitas con Pure mixto';
  private readonly TORTILLA_ATUN = 'Tortilla de atun con ensalada';
  private readonly PECHUGAS_SALTEADAS = 'Pechugas salteadas con arroz o quinoa';
  private readonly SOPA = 'Sopa de verduras';
  private readonly EMPANADAS_ATUN = 'Empanadas de atun';
  private readonly MILAS_ENSALADA = 'Milanesa de carne con ensalada';
  private readonly GUISO = 'Guiso de lentejas';
  private readonly MUSLO_MOSTAZA = 'Mulsos a la mostaza con pure';
  private readonly BASTONES_MERLUZA = 'Bastones de merluza con ensalada';
  private readonly HAMBURGUESAS_BIFES = 'Hamburguesas y bifes con fritas';
  private readonly CARNE_HORNO = 'Carne al horno';
  private readonly TORTILLA_ZAPALLITOS = 'Tortilla de zapallitos con ensalada';
  private readonly ARROZ_ATUN = 'Arroz con salsa de atun';
  private readonly PASTEL_CARNE = 'Pastel de carne';
  private readonly CERDO_CHINO = 'Cerdo con verduras';
  private readonly PECHUGAS_RELLENAS = 'Pechugas rellenas con jq';
  private readonly FAJITAS = 'Fajitas de carne';
  private readonly MERLUZA_CACEROLA = 'Merluza a la cacerola';
  private readonly BOLOGNESA = 'Fideos a la bolognesa';
  private readonly DELIVERY = 'Delivery cualquiera';
  private readonly REVUELTO = 'Revuelto de arroz';
  private readonly ARROZ_CHINO = 'Arroz chino';
  private readonly MILAS_MERLUZA = 'Milanesas de merluza con ensalada';
  private readonly ENSALADA_GALLEGA = 'Ensalada gallega';
  private readonly ZAPALLITOS_TUCO = 'Zapallitos con tuco';
  private readonly ARROZ_HONGOS = 'Arroz con salsa de hongos';
  private readonly POLLO_VERDEO = 'Pollo al verdeo con arroz';
  private readonly POLLO_PLANCHA = 'Pollo a la plancha con pure';
}
