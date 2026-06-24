/**
 * ===========================================================
 * TS AUTOTRÓNICA ERP
 * Auth.gs
 * Versión 0.1.0
 * ===========================================================
 */

/**
 * Obtiene el correo del usuario actual
 */
function obtenerUsuarioActual() {
  return Session.getActiveUser().getEmail();
}

/**
 * Busca un usuario registrado
 */
function obtenerUsuario() {

  const email = obtenerUsuarioActual();

  const hoja = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("USUARIOS");

  const datos = hoja.getDataRange().getValues();

  for (let i = 1; i < datos.length; i++) {

    if (datos[i][2] == email) {

      return {
        id: datos[i][0],
        nombre: datos[i][1],
        correo: datos[i][2],
        rol: datos[i][3],
        estado: datos[i][4]
      };

    }

  }

  return null;

}

/**
 * Verifica si el usuario puede ingresar
 */
function validarAcceso() {

  const usuario = obtenerUsuario();

  if (usuario == null) {

    throw new Error("Usuario no registrado.");

  }

  if (usuario.estado != "ACTIVO") {

    throw new Error("Usuario inactivo.");

  }

  return usuario;

}

/**
 * Comprueba si el usuario tiene un rol específico
 */
function tieneRol(rol) {

  const usuario = validarAcceso();

  return usuario.rol == rol;

}

/**
 * Comprueba varios roles permitidos
 */
function tieneAlguno(roles) {

  const usuario = validarAcceso();

  return roles.indexOf(usuario.rol) > -1;

}

/**
 * Devuelve información del usuario conectado
 */
function usuarioActual() {

  return validarAcceso();

}
