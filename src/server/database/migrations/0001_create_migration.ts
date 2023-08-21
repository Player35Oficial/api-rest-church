import { Knex } from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex) {

  return knex
    .schema
    .createTable(ETableNames.usuario, table => {
      table.bigIncrements("id_usuario").primary().index();
      table.string("nome").notNullable().checkLength(">=", 3).index();
      table.string("email").unique().checkLength(">=", 6).notNullable();
      table.string("senha").checkLength(">=", 8).notNullable();
      table.string("cargo").notNullable();
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.usuario}`);
    });

}


export async function down(knex: Knex) {

  return knex.schema.dropTable(ETableNames.usuario)
    .then(() => {
      console.log(`# Dropped table ${ETableNames.usuario}`);
    });
}
