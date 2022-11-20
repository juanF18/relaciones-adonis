import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'perfiles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      // hace referencia a la clave primaria de la tabla usuarios.
      table
        .integer('id_usuario')
        .unsigned()
        .references('usuarios.id')
        .onDelete('CASCADE')
        .notNullable()
      //Tambien la ultima funcion hace que cuando se elimine un usuario elimina el perfil
      table.string('celular', 30)
      table.string('url_facebook')
      table.string('url_instagram')
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
