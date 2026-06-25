/**
 * ==========================================================
 * TS AUTOTRÓNICA ERP
 * Constants.gs
 * Versión: 0.1.0
 * ==========================================================
 */

/**
 * Información del sistema
 */
const APP = Object.freeze({
  NAME: "TS Autotrónica ERP",
  VERSION: "0.1.0",
  COMPANY: "TS Autotrónica",
  COUNTRY: "Bolivia",
  CURRENCY: "BOB",
  TIMEZONE: "America/La_Paz"
});

/**
 * Nombres de hojas
 */
const SHEETS = Object.freeze({
  CONFIG: "CONFIG",
  USERS: "USUARIOS",
  CLIENTS: "CLIENTES",
  VEHICLES: "VEHICULOS",
  RECEPTION: "RECEPCION",
  DIAGNOSTICS: "DIAGNOSTICOS",
  WORK_ORDERS: "OT",
  WORK_ORDER_DETAIL: "DETALLE_OT",
  INVENTORY: "INVENTARIO",
  MOVEMENTS: "MOVIMIENTOS",
  PAYMENTS: "PAGOS",
  INVOICES: "FACTURAS",
  CASH: "CAJA",
  AUDIT: "AUDITORIA",
  DASHBOARD: "DASHBOARD"
});

/**
 * Roles del sistema
 */
const ROLES = Object.freeze({
  ADMIN: "ADMINISTRADOR",
  MANAGER: "GERENCIA",
  RECEPTION: "RECEPCION",
  TECHNICIAN: "TECNICO",
  ACCOUNTING: "CONTABILIDAD"
});

/**
 * Estado de usuarios
 */
const USER_STATUS = Object.freeze({
  ACTIVE: "ACTIVO",
  INACTIVE: "INACTIVO"
});

/**
 * Estado de órdenes de trabajo
 */
const WORK_ORDER_STATUS = Object.freeze({
  OPEN: "ABIERTA",
  IN_PROGRESS: "EN PROCESO",
  PAUSED: "PAUSADA",
  FINISHED: "FINALIZADA",
  DELIVERED: "ENTREGADA",
  CANCELLED: "CANCELADA"
});

/**
 * Estado de presupuestos
 */
const QUOTE_STATUS = Object.freeze({
  PENDING: "PENDIENTE",
  APPROVED: "APROBADO",
  REJECTED: "RECHAZADO"
});

/**
 * Estado de pagos
 */
const PAYMENT_STATUS = Object.freeze({
  PENDING: "PENDIENTE",
  PARTIAL: "PARCIAL",
  PAID: "PAGADO"
});

/**
 * Prefijos para numeración
 */
const PREFIX = Object.freeze({
  CLIENT: "CLI",
  VEHICLE: "VEH",
  RECEPTION: "REC",
  DIAGNOSTIC: "DIA",
  WORK_ORDER: "OT",
  QUOTE: "PRE",
  INVOICE: "FAC",
  PAYMENT: "PAG",
  INVENTORY: "INV"
});

/**
 * Colores corporativos
 */
const COLORS = Object.freeze({
  PRIMARY: "#0B5394",
  SECONDARY: "#F4B400",
  SUCCESS: "#34A853",
  WARNING: "#FBBC05",
  ERROR: "#EA4335",
  LIGHT: "#F8F9FA",
  DARK: "#202124"
});

/**
 * Tipos de combustible
 */
const FUEL_TYPES = Object.freeze([
  "GASOLINA",
  "DIESEL",
  "GNV",
  "GLP",
  "HÍBRIDO",
  "ELÉCTRICO"
]);

/**
 * Métodos de pago
 */
const PAYMENT_METHODS = Object.freeze([
  "EFECTIVO",
  "QR",
  "TRANSFERENCIA",
  "TARJETA",
  "DEPÓSITO"
]);
