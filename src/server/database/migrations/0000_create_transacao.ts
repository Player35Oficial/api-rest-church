import { Knex } from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex) {

  return knex
    .schema
    .createTable(ETableNames.transacao, table => {
      table.bigIncrements("id_transacao").primary().index();
      table.bigInteger("id_usuario").references("id_usuario");
      table.bigInteger("id_tipos_transacao").references("id_tipos_transacao");
      table.float("valor").checkPositive();
      table.dateTime("data");

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

