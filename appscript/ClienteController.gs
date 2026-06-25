/**
 * ==========================================================
 * TS AUTOTRÓNICA ERP
 * ClienteController.gs
 * Controlador del módulo Clientes
 * Versión: 0.1.0
 * ==========================================================
 */

class ClienteController {

  constructor() {
    this.service = new ClienteService();
  }

  /**
   * Registrar cliente
   */
  registrar(datos) {

    try {

      const cliente = this.service.registrar(datos);

      return {
        success: true,
        message: "Cliente registrado correctamente.",
        data: cliente
      };

    } catch (error) {

      LoggerERP.error("CLIENTES", error);

      return {
        success: false,
        message: error.message
      };

    }

  }

  /**
   * Listar clientes
   */
  listar() {

    try {

      return {
        success: true,
        data: this.service.listar()
      };

    } catch (error) {

      LoggerERP.error("CLIENTES", error);

      return {
        success: false,
        message: error.message
      };

    }

  }

  /**
   * Buscar clientes
   */
  buscar(texto) {

    try {

      return {
        success: true,
        data: this.service.buscar(texto)
      };

    } catch (error) {

      LoggerERP.error("CLIENTES", error);

      return {
        success: false,
        message: error.message
      };

    }

  }

}
