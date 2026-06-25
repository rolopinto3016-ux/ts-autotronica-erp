/**
 * ==========================================================
 * TS AUTOTRÓNICA ERP
 * VehiculoRepository.gs
 * ==========================================================
 */

class VehiculoRepository extends BaseRepository {

  constructor() {
    super(SHEETS.VEHICLES);
  }

  /**
   * Guarda un vehículo
   */
  save(vehiculo) {

    this.insert([
      vehiculo.id,
      vehiculo.idCliente,
      vehiculo.placa,
      vehiculo.vin,
      vehiculo.motor,
      vehiculo.marca,
      vehiculo.modelo,
      vehiculo.anio,
      vehiculo.color,
      vehiculo.combustible,
      vehiculo.transmision,
      vehiculo.kilometraje,
      vehiculo.observaciones,
      vehiculo.fechaRegistro,
      vehiculo.usuarioRegistro,
      "ACTIVO"
    ]);

    return vehiculo;

  }

  /**
   * Buscar por placa
   */
  findByPlate(placa){

    return this.findAll().find(v =>
      v.PLACA === placa
    );

  }

  /**
   * Buscar por VIN
   */
  findByVIN(vin){

    return this.findAll().find(v =>
      v.VIN === vin
    );

  }

  /**
   * Buscar por motor
   */
  findByEngine(motor){

    return this.findAll().find(v =>
      v.MOTOR === motor
    );

  }

  /**
   * Buscar por cliente
   */
  findByClient(idCliente){

    return this.findAll().filter(v =>
      v.ID_CLIENTE === idCliente
    );

  }

  /**
   * Buscar por texto
   */
  search(texto){

    texto = texto.toUpperCase();

    return this.findAll().filter(v =>

      v.PLACA.toUpperCase().includes(texto) ||

      v.MARCA.toUpperCase().includes(texto) ||

      v.MODELO.toUpperCase().includes(texto)

    );

  }

  /**
   * Vehículos activos
   */
  findActive(){

    return this.findAll().filter(v =>
      v.ESTADO === "ACTIVO"
    );

  }

}
