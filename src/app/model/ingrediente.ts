export class Ingrediente {
  constructor(
    public nombre: string,
    public unidad: string,
  ) {}

  public static readonly QUESO_MANTECOSO = new Ingrediente(
    'QUESO_MANTECOSO',
    'grs',
  );
  public static readonly ARROZ = new Ingrediente('ARROZ', 'grs.');
  public static readonly POLENTA = new Ingrediente('POLENTA', 'grs.');
  public static readonly FIDEOS = new Ingrediente('FIDEOS', 'grs');
  public static readonly FIDEOS_TACC = new Ingrediente('FIDEOS_TACC', 'grs');
  public static readonly FIDEOS_SOPA = new Ingrediente('FIDEOS_SOPA', 'grs');
  public static readonly LENTEJAS = new Ingrediente('LENTEJAS', 'grs');
  public static readonly PATA_MUSLO = new Ingrediente('Pata muslo', 'u');
  public static readonly BASTONES_MERLUZA = new Ingrediente(
    'Bastones merluza',
    'grs',
  );
  public static readonly TAPAS = new Ingrediente('TAPAS', 'paquete');
  public static readonly TAPAS_TACC = new Ingrediente('TAPAS_TACC', 'paquete');
  public static readonly POLLO = new Ingrediente('POLLO', 'U');
  public static readonly JAMON = new Ingrediente('JAMON', 'grs');
  public static readonly MC_CAIN = new Ingrediente('papas McCain', 'paquete');
  public static readonly MILAS = new Ingrediente('Milanesas', 'U');

  public static readonly CEBOLLA = new Ingrediente('CEBOLLA', 'U');
  public static readonly ACELGA = new Ingrediente('ACELGA', 'Atados');
  public static readonly BIFE_CHORIZO = new Ingrediente('Bife chorizo', 'U');
  public static readonly VERDEO = new Ingrediente('VERDEO', 'U');
  public static readonly PAPA = new Ingrediente('PAPA', 'U');
  public static readonly BATATA = new Ingrediente('BATATA', 'U');
  public static readonly CHOCLO = new Ingrediente('CHOCLO', 'U');
  public static readonly APIO = new Ingrediente('APIO', 'U');
  public static readonly TOMATE = new Ingrediente('TOMATE', 'U');
  public static readonly LECHUGA = new Ingrediente('LECHUGA', 'Atados');
  public static readonly CHAUCHAS = new Ingrediente('CHAUCHAS', 'grs');
  public static readonly ZANAHORIA = new Ingrediente('ZANAHORIA', 'U');
  public static readonly ZAPALLITO = new Ingrediente('ZAPALLITO', 'U');
  public static readonly LIMON = new Ingrediente('LIMON', 'U');
  public static readonly MORRON = new Ingrediente('MORRON', 'U');
  public static readonly QUESO_MAQUINA = new Ingrediente(
    'Queso Maquina',
    'grs',
  );
  public static readonly RUCULA = new Ingrediente('RUCULA', 'atado');
  public static readonly HUEVO = new Ingrediente('HUEVO', 'U');

  public static readonly PICADA = new Ingrediente('PICADA', 'grs');
  public static readonly PALTA = new Ingrediente('Palta', 'grs');
  public static readonly FALDA = new Ingrediente('FALDA', 'grs');
  public static readonly ARVEJA = new Ingrediente('ARVEJA', 'lata');
  public static readonly CARNE_HORNO = new Ingrediente('CARNE_HORNO', 'grs');
  public static readonly CARNE_ESTOFADO = new Ingrediente(
    'CARNE_ESTOFADO',
    'grs',
  );
  public static readonly CARNE_SALTEADO = new Ingrediente(
    'CARNE_SALTEADO',
    'grs',
  );
  public static readonly CARNE = new Ingrediente('Carne para horno', 'grs');
  public static readonly PURE_TOMATE = new Ingrediente('PURE_TOMATE', 'Envase');
  public static readonly ATUN = new Ingrediente('ATUN', 'lata');
  public static readonly ACEITUNA = new Ingrediente('ACEITUNA', 'paquete');
  public static readonly CERDO = new Ingrediente('Cerdo', 'grs');
  public static readonly ZAPALLO = new Ingrediente('ZAPALLO', 'U');
  public static readonly CHORIZO_COLORAO = new Ingrediente(
    'CHORIZO_COLORAO',
    'U',
  );
  public static readonly PANCETA = new Ingrediente('PANCETA', 'grs');
  public static readonly MERLUZA = new Ingrediente('MERLUZA', 'Kg');
  public static readonly CARRE = new Ingrediente('CARRE', 'Kg');
  public static readonly SALCHICHAS = new Ingrediente('SALCHICHAS', 'Paquete');
  public static readonly SALCHICHAS_VIENA = new Ingrediente(
    'SALCHICHAS_VIENA',
    'Paquete',
  );
  public static readonly HAMBURGUESA = new Ingrediente('HAMBURGUESA', 'U');
  public static readonly PATITAS = new Ingrediente('PATITAS', 'grs');
  public static readonly RAPIDITAS = new Ingrediente('Rapiditas', 'paquete');
  public static readonly PAN_SANGUCHE = new Ingrediente(
    'PAN_SANGUCHE',
    'unidades',
  );
  public static readonly PECHUGA = new Ingrediente('PECHUGA', 'grs');
  public static readonly QUINOA = new Ingrediente('Quinoa', 'grs');
  public static readonly HONGOS = new Ingrediente('Hongos', 'bandeja');
}
