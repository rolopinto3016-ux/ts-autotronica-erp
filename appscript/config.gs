/**
 * ===========================================================
 * TS AUTOTRÓNICA ERP
 * Config.gs
 * Versión 0.1.0
 * ===========================================================
 */

// Configuración de la empresa
const CONFIG = {

  EMPRESA: "TS Autotrónica",

  SISTEMA: "TS Autotrónica ERP",

  VERSION: "0.1.0",

  MONEDA: "BOB",

  PAIS: "Bolivia",

  CIUDAD: "Cochabamba",

  TELEFONO: "",

  EMAIL: "",

  WEB: "",

  COLOR_PRIMARIO: "#0B5394",

  COLOR_SECUNDARIO: "#F4B400",

  COLOR_EXITO: "#34A853",

  COLOR_ERROR: "#EA4335"

};

// Prefijos de numeración
const PREFIJOS = {

  CLIENTE: "CLI",

  VEHICULO: "VEH",

  RECEPCION: "REC",

  DIAGNOSTICO: "DIAG",

  OT: "OT",

  PRESUPUESTO: "PRE",

  FACTURA: "FAC",

  PAGO: "PAG"

};

/**
 * Genera un código consecutivo
 *
 * Ejemplo:
 * CLI-000001
 * OT-000125
 */
function generarCodigo(prefijo, numero) {

  return prefijo + "-" + Utilities.formatString("%06d", numero);

}

/**
 * Devuelve la fecha actual
 */
function fechaActual() {

  return Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "yyyy-MM-dd"
  );

}

/**
 * Devuelve la fecha y hora actual
 */
function fechaHoraActual() {

  return Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "yyyy-MM-dd HH:mm:ss"
  );

}

/**
 * Configuración inicial del sistema
 */
function inicializarSistema() {

  const hoja = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("CONFIG");

  if (!hoja) {

    SpreadsheetApp.getUi().alert(
      "No existe la hoja CONFIG."
    );

    return;

  }

  hoja.clear();

  hoja.appendRow(["CLAVE", "VALOR"]);

  hoja.appendRow(["EMPRESA", CONFIG.EMPRESA]);
  hoja.appendRow(["SISTEMA", CONFIG.SISTEMA]);
  hoja.appendRow(["VERSION", CONFIG.VERSION]);
  hoja.appendRow(["MONEDA", CONFIG.MONEDA]);
  hoja.appendRow(["PAIS", CONFIG.PAIS]);
  hoja.appendRow(["CIUDAD", CONFIG.CIUDAD]);
  hoja.appendRow(["FECHA_INSTALACION", fechaActual()]);

  SpreadsheetApp.getUi().alert(
    "Configuración inicial creada correctamente."
  );

}
