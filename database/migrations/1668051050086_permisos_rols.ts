import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'permisos_rols'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_rol').unsigned().references('roles.id').onDelete('CASCADE').notNullable()
      table
        .integer('id_permiso')
        .unsigned()
        .references('permisos.id')
        .onDelete('CASCADE')
        .notNullable()
      table.unique(['id_rol', 'id_permiso'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
