/**
 * ==========================================================
 * TS AUTOTRÓNICA ERP
 * VehiculoController.gs
 * ==========================================================
 */

class VehiculoController {

  constructor() {
    this.service = new VehiculoService();
  }

  /**
   * Registrar vehículo
   */
  registrar(datos) {

    try {

      const vehiculo = this.service.registrar(datos);

      return {
        success: true,
        message: "Vehículo registrado correctamente.",
        data: vehiculo
      };

    } catch (error) {

      LoggerERP.error("VEHICULOS", error);

      return {
        success: false,
        message: error.message
      };

    }

  }

  /**
   * Listar vehículos
   */
  listar() {

    try {

      return {
        success: true,
        data: this.service.listar()
      };

    } catch (error) {

      LoggerERP.error("VEHICULOS", error);

      return {
        success: false,
        message: error.message
      };

    }

  }

  /**
   * Buscar vehículos
   */
  buscar(texto) {

    try {

      return {
        success: true,
        data: this.service.buscar(texto)
      };

    } catch (error) {

      LoggerERP.error("VEHICULOS", error);

      return {
        success: false,
        message: error.message
      };

    }

  }

}
