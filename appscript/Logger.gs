/**
 * ==========================================================
 * TS AUTOTRÓNICA ERP
 * Logger.gs
 * Versión: 0.1.0
 * ==========================================================
 */

class LoggerERP {

  /**
   * Registrar evento
   */
  static log(accion, modulo, detalle = "") {

    try {

      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const hoja = ss.getSheetByName(SHEETS.AUDIT);

      if (!hoja) return;

      const usuario = Session.getActiveUser().getEmail() || "ANÓNIMO";

      hoja.appendRow([
        Utilities.getUuid(),
        new Date(),
        usuario,
        accion,
        modulo,
        detalle
      ]);

    } catch (error) {

      console.error(error);

    }

  }

  /**
   * Información
   */
  static info(modulo, mensaje) {

    this.log("INFO", modulo, mensaje);

  }

  /**
   * Advertencia
   */
  static warning(modulo, mensaje) {

    this.log("WARNING", modulo, mensaje);

  }

  /**
   * Error
   */
  static error(modulo, error) {

    this.log("ERROR", modulo, error.toString());

  }

}
