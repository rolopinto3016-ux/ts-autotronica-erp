/**
 * ===========================================================
 * TS AUTOTRÓNICA ERP
 * Clientes.gs
 * Versión 0.1.0
 * ===========================================================
 */

const HOJA_CLIENTES = "CLIENTES";

/**
 * Registra un nuevo cliente
 */
function registrarCliente(cliente) {

  validarAcceso();

  const hoja = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName(HOJA_CLIENTES);

  // Validaciones
  if (!cliente.nombre) throw new Error("El nombre es obligatorio.");
  if (!cliente.telefono) throw new Error("El teléfono es obligatorio.");

  // Evitar duplicados por CI/NIT
  const datos = hoja.getDataRange().getValues();

  for (let i = 1; i < datos.length; i++) {

    if (datos[i][2] == cliente.ciNit) {

      throw new Error("Ya existe un cliente con ese CI/NIT.");

    }

  }

  // Generar ID
  const id = generarCodigo(PREFIJOS.CLIENTE, hoja.getLastRow());

  hoja.appendRow([
    id,
    mayusculas(cliente.nombre),
    cliente.ciNit,
    cliente.telefono,
    cliente.whatsapp,
    cliente.email,
    mayusculas(cliente.direccion),
    fechaHoraActual()
  ]);

  return {
    ok: true,
    mensaje: "Cliente registrado correctamente.",
    id: id
  };

}

/**
 * Buscar cliente por ID
 */
function buscarCliente(idCliente){

  const hoja = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName(HOJA_CLIENTES);

  const datos = hoja.getDataRange().getValues();

  for(let i=1;i<datos.length;i++){

    if(datos[i][0]==idCliente){

      return {
        id: datos[i][0],
        nombre: datos[i][1],
        ciNit: datos[i][2],
        telefono: datos[i][3],
        whatsapp: datos[i][4],
        email: datos[i][5],
        direccion: datos[i][6],
        fecha: datos[i][7]
      };

    }

  }

  return null;

}

/**
 * Buscar por nombre
 */
function buscarClientes(texto){

  const hoja = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName(HOJA_CLIENTES);

  const datos = hoja.getDataRange().getValues();

  let resultado=[];

  texto = texto.toUpperCase();

  for(let i=1;i<datos.length;i++){

    if(datos[i][1].toString().includes(texto)){

      resultado.push({
        id: datos[i][0],
        nombre: datos[i][1],
        telefono: datos[i][3]
      });

    }

  }

  return resultado;

}

/**
 * Devuelve todos los clientes
 */
function listarClientes(){

  const hoja = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName(HOJA_CLIENTES);

  const datos = hoja.getDataRange().getValues();

  datos.shift();

  return datos;

}
