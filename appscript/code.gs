/**
 * ===========================================================
 * TS AUTOTRÓNICA ERP
 * Versión: 0.1.0
 * Archivo: Code.gs
 * Autor: Rolando Edwin Pinto Terán
 * ===========================================================
 */

const APP_NAME = "TS Autotrónica ERP";
const VERSION = "0.1.0";

/**
 * Inicia la aplicación web
 */
function doGet() {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle(APP_NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Crea el menú del sistema
 */
function onOpen() {

  SpreadsheetApp.getUi()
    .createMenu("TS Autotrónica ERP")
    .addItem("Dashboard", "abrirDashboard")
    .addSeparator()
    .addItem("Inicializar Base de Datos", "crearBaseDatos")
    .addSeparator()
    .addItem("Acerca del Sistema", "acercaDe")
    .addToUi();

}

/**
 * Ventana Acerca de...
 */
function acercaDe(){

SpreadsheetApp.getUi().alert(
APP_NAME +
"\nVersión: " + VERSION +
"\n\nSistema Integral para Talleres Mecánicos" +
"\nDesarrollado para TS Autotrónica"
);

}

/**
 * Abre el Dashboard
 */
function abrirDashboard(){

var html = HtmlService.createHtmlOutputFromFile("dashboard")
.setWidth(1200)
.setHeight(700);

SpreadsheetApp.getUi().showModalDialog(html,"Dashboard");

}

/**
 * Función de prueba
 */
function test(){

Logger.log("TS Autotrónica ERP funcionando correctamente.");

}
