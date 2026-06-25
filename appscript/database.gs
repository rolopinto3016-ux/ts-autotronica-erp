/**
 * ===========================================================
 * TS AUTOTRÓNICA ERP
 * Database.gs
 * Versión 0.1.0
 * ===========================================================
 */

function crearBaseDatos() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const hojas = [

    {
      nombre: "CONFIG",
      columnas: [
        "CLAVE",
        "VALOR"
      ]
    },

    {
      nombre: "USUARIOS",
      columnas: [
        "ID_USUARIO",
        "NOMBRE",
        "CORREO",
        "ROL",
        "ESTADO"
      ]
    },

    {
      nombre: "CLIENTES",
      columnas: [
        "ID_CLIENTE",
        "NOMBRE",
        "CI_NIT",
        "TELEFONO",
        "WHATSAPP",
        "EMAIL",
        "DIRECCION",
        "FECHA_REGISTRO"
      ]
    },

    {
      nombre: "VEHICULOS",
      columnas: [
        "ID_VEHICULO",
        "ID_CLIENTE",
        "PLACA",
        "MARCA",
        "MODELO",
        "AÑO",
        "COLOR",
        "VIN",
        "MOTOR",
        "COMBUSTIBLE",
        "KILOMETRAJE"
      ]
    },

    {
      nombre: "RECEPCION",
      columnas: [
        "ID_RECEPCION",
        "FECHA",
        "CLIENTE",
        "VEHICULO",
        "KILOMETRAJE",
        "COMBUSTIBLE",
        "OBSERVACIONES",
        "ESTADO"
      ]
    },

    {
      nombre: "DIAGNOSTICOS",
      columnas: [
        "ID_DIAGNOSTICO",
        "ID_RECEPCION",
        "CODIGO_OBD",
        "DESCRIPCION",
        "TECNICO",
        "FECHA"
      ]
    },

    {
      nombre: "OT",
      columnas: [
        "ID_OT",
        "ID_DIAGNOSTICO",
        "TECNICO",
        "ESTADO",
        "TOTAL"
      ]
    },

    {
      nombre: "PRESUPUESTOS",
      columnas: [
        "ID_PRE",
        "CLIENTE",
        "TOTAL",
        "ESTADO"
      ]
    },

    {
      nombre: "REPUESTOS",
      columnas: [
        "CODIGO",
        "DESCRIPCION",
        "MARCA",
        "STOCK",
        "PRECIO"
      ]
    },

    {
      nombre: "FACTURAS",
      columnas: [
        "ID_FACTURA",
        "CLIENTE",
        "TOTAL",
        "FECHA"
      ]
    },

    {
      nombre: "PAGOS",
      columnas: [
        "ID_PAGO",
        "FACTURA",
        "MONTO",
        "METODO"
      ]
    },

    {
      nombre: "DASHBOARD",
      columnas: [
        "INDICADOR",
        "VALOR"
      ]
    }

  ];

  hojas.forEach(function(h) {

    let hoja = ss.getSheetByName(h.nombre);

    if (!hoja) {

      hoja = ss.insertSheet(h.nombre);

    } else {

      hoja.clear();

    }

    hoja.getRange(1,1,1,h.columnas.length)
      .setValues([h.columnas]);

    hoja.getRange(1,1,1,h.columnas.length)
      .setFontWeight("bold");

    hoja.setFrozenRows(1);

    hoja.autoResizeColumns(1,h.columnas.length);

  });

  SpreadsheetApp.getUi().alert(
    "TS Autotrónica ERP\n\nBase de datos creada correctamente."
  );

}
