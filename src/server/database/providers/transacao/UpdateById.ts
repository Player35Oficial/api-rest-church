import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { ITransacao } from "../../models";


export const updateById = async (id: number, data: Omit<ITransacao, "id" | "id_usuario" | "date">) => {

  try {

    const dataReceived = data;

    const repo = await Knex(ETableNames.transacao).where("id", "=", id).first();

    if (dataReceived.id_tipos_transacao === repo.id_tipos_transacao) {
      const result = await Knex(ETableNames.transacao).where("id", "=", id).first().update(data).returning("id");
      if (result) return result;
      return new Error("Erro ao atualizar registro");
    } else {
      return new Error(`Você está tentando fazer ${dataReceived.id_tipos_transacao} mas o registro com ID: ${repo.id} é do tipo ${repo.id_tipos_transacao}`);
    }    


    

  } catch (error) {
    console.error(error);
    return new Error("Erro ao atualizar registro");
  }

};
