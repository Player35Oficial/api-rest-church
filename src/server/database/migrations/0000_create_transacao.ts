import { Knex } from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex) {

  return knex
    .schema
    .createTable(ETableNames.transacao, table => {
      table.bigIncrements("id").primary().index();
      table.bigInteger("id_usuario").notNullable();
      table.text("id_tipos_transacao").notNullable();
      table.float("valor").checkPositive();
      table.dateTime("data").defaultTo(Date.now());
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.transacao}`);
    });

}


export async function down(knex: Knex) {

  return knex.schema.dropTable(ETableNames.transacao)
    .then(() => {
      console.log(`# Dropped table ${ETableNames.transacao}`);
    });
}

