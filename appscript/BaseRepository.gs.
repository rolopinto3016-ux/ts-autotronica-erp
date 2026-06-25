/**
 * ==========================================================
 * TS AUTOTRÓNICA ERP
 * BaseRepository.gs
 * Versión 0.1.0
 * ==========================================================
 */

class BaseRepository {

  constructor(sheetName) {
    this.sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

    if (!this.sheet) {
      throw new Error("No existe la hoja: " + sheetName);
    }
  }

  /**
   * Obtiene todos los registros
   */
  findAll() {

    const data = this.sheet.getDataRange().getValues();

    if (data.length <= 1) return [];

    const headers = data.shift();

    return data.map(row => {
      let obj = {};

      headers.forEach((h, i) => {
        obj[h] = row[i];
      });

      return obj;
    });

  }

  /**
   * Inserta un registro
   */
  insert(values) {

    this.sheet.appendRow(values);

  }

  /**
   * Busca una fila por ID
   */
  findById(id) {

    const data = this.sheet.getDataRange().getValues();

    for (let i = 1; i < data.length; i++) {

      if (data[i][0] == id) {

        return {
          row: i + 1,
          values: data[i]
        };

      }

    }

    return null;

  }

  /**
   * Actualiza una fila
   */
  update(row, values) {

    this.sheet
      .getRange(row, 1, 1, values.length)
      .setValues([values]);

  }

  /**
   * Elimina una fila
   */
  delete(row) {

    this.sheet.deleteRow(row);

  }

}
