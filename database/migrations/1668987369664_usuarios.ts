import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  public async up() {
    this.schema.alterTable('usuarios', (table) => {
      table.integer('id_rol').unsigned().references('roles.id')
    })
  }
}
