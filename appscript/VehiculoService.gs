/**
 * ==========================================================
 * TS AUTOTRÓNICA ERP
 * VehiculoService.gs
 * ==========================================================
 */

class VehiculoService {

  constructor() {
    this.repository = new VehiculoRepository();
    this.clienteRepository = new ClienteRepository();
  }

  /**
   * Registrar vehículo
   */
  registrar(datos) {

    Security.requireRole([
      ROLES.ADMIN,
      ROLES.RECEPTION,
      ROLES.MANAGER
    ]);

    this.validar(datos);

    // Verificar cliente
    const cliente = this.clienteRepository.findById(datos.idCliente);

    if (!cliente) {
      throw new Error("El cliente no existe.");
    }

    // Validar placa
    if (this.repository.findByPlate(datos.placa.toUpperCase())) {
      throw new Error("La placa ya está registrada.");
    }

    // Validar VIN
    if (datos.vin) {

      if (this.repository.findByVIN(datos.vin.toUpperCase())) {

        throw new Error("El VIN ya existe.");

      }

    }

    // Validar motor
    if (datos.motor) {

      if (this.repository.findByEngine(datos.motor.toUpperCase())) {

        throw new Error("El número de motor ya existe.");

      }

    }

    const vehiculo = {

      id: this.generarId(),

      idCliente: datos.idCliente,

      placa: datos.placa.toUpperCase(),

      vin: datos.vin.toUpperCase(),

      motor: datos.motor.toUpperCase(),

      marca: datos.marca.toUpperCase(),

      modelo: datos.modelo.toUpperCase(),

      anio: datos.anio,

      color: datos.color.toUpperCase(),

      combustible: datos.combustible,

      transmision: datos.transmision,

      kilometraje: Number(datos.kilometraje),

      observaciones: datos.observaciones,

      fechaRegistro: new Date(),

      usuarioRegistro: Security.getCurrentUser()

    };

    this.repository.save(vehiculo);

    LoggerERP.info(
      "VEHICULOS",
      "Vehículo registrado: " + vehiculo.placa
    );

    return vehiculo;

  }

  /**
   * Validaciones
   */
  validar(datos){

    if(!datos.idCliente)
      throw new Error("Seleccione un cliente.");

    if(!datos.placa)
      throw new Error("Ingrese la placa.");

    if(!datos.marca)
      throw new Error("Ingrese la marca.");

    if(!datos.modelo)
      throw new Error("Ingrese el modelo.");

    if(datos.kilometraje<0)
      throw new Error("Kilometraje inválido.");

  }

  /**
   * Generar ID
   */
  generarId(){

    return generarCodigo(
      PREFIX.VEHICLE,
      this.repository.findAll().length+1
    );

  }

  /**
   * Buscar
   */
  buscar(texto){

    return this.repository.search(texto);

  }

  /**
   * Listar
   */
  listar(){

    return this.repository.findActive();

  }

}
