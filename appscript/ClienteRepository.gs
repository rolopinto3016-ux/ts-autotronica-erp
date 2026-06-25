/**
 * ==========================================================
 * TS AUTOTRÓNICA ERP
 * ClienteRepository.gs
 * Capa de acceso a datos
 * ==========================================================
 */

class ClienteRepository extends BaseRepository {

  constructor() {
    super(SHEETS.CLIENTS);
  }

  /**
   * Guarda un cliente
   */
  save(cliente) {

    this.insert([
      cliente.id,
      cliente.nombre,
      cliente.ciNit,
      cliente.telefono,
      cliente.whatsapp,
      cliente.email,
      cliente.direccion,
      cliente.fechaRegistro,
      cliente.usuarioRegistro,
      "ACTIVO"
    ]);

    return cliente;
  }

  /**
   * Buscar por ID
   */
  findById(id) {

    const clientes = this.findAll();

    return clientes.find(c => c.ID_CLIENTE === id);

  }

  /**
   * Buscar por CI o NIT
   */
  findByCiNit(ciNit) {

    const clientes = this.findAll();

    return clientes.find(c => c.CI_NIT === ciNit);

  }

  /**
   * Buscar por teléfono
   */
  findByPhone(phone) {

    const clientes = this.findAll();

    return clientes.find(c => c.TELEFONO === phone);

  }

  /**
   * Buscar por nombre
   */
  search(texto) {

    texto = texto.toUpperCase();

    return this.findAll().filter(c =>
      c.NOMBRE.toUpperCase().includes(texto)
    );

  }

  /**
   * Obtener clientes activos
   */
  findActive() {

    return this.findAll().filter(c =>
      c.ESTADO === "ACTIVO"
    );

  }

}
