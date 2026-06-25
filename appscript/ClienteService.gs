/**
 * ==========================================================
 * TS AUTOTRÓNICA ERP
 * ClienteService.gs
 * Lógica de negocio
 * Versión: 0.1.0
 * ==========================================================
 */

class ClienteService {

  constructor() {
    this.repository = new ClienteRepository();
  }

  /**
   * Registrar cliente
   * @param {Object} datos
   * @returns {Object}
   */
  registrar(datos) {

    Security.requireRole([
      ROLES.ADMIN,
      ROLES.RECEPTION,
      ROLES.MANAGER
    ]);

    this.validar(datos);

    // Verificar duplicado
    const existente = this.repository.findByCiNit(datos.ciNit);

    if (existente) {
      throw new Error("Ya existe un cliente con ese CI/NIT.");
    }

    const cliente = {
      id: this.generarId(),
      nombre: datos.nombre.trim().toUpperCase(),
      ciNit: datos.ciNit.trim(),
      telefono: datos.telefono.trim(),
      whatsapp: datos.whatsapp || "",
      email: datos.email || "",
      direccion: (datos.direccion || "").trim().toUpperCase(),
      fechaRegistro: new Date(),
      usuarioRegistro: Security.getCurrentUser()
    };

    this.repository.save(cliente);

    LoggerERP.info(
      "CLIENTES",
      "Cliente registrado: " + cliente.id
    );

    return cliente;
  }

  /**
   * Validaciones
   */
  validar(datos) {

    if (!datos.nombre)
      throw new Error("Debe ingresar el nombre.");

    if (!datos.telefono)
      throw new Error("Debe ingresar el teléfono.");

    if (!datos.ciNit)
      throw new Error("Debe ingresar el CI/NIT.");

  }

  /**
   * Genera el siguiente ID
   */
  generarId() {

    const total = this.repository.findAll().length + 1;

    return generarCodigo(
      PREFIX.CLIENT,
      total
    );

  }

  /**
   * Buscar cliente
   */
  buscar(texto) {

    return this.repository.search(texto);

  }

  /**
   * Obtener todos
   */
  listar() {

    return this.repository.findActive();

  }

}
