import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { ITransacao } from "../../models";


export const updateById = async (id: number, id_tipos_transacao: string, valor: Omit<ITransacao, "id" | "id_usuario" | "date" | "id_tipos_transacao">) => {

  try {


    const repo = await Knex(ETableNames.transacao).where("id", "=", id).first();

    if (id_tipos_transacao === repo.id_tipos_transacao) {
      const result = await Knex(ETableNames.transacao).where("id", "=", id).first().update(valor).returning("id");
      if (result) return result;
      return new Error("Erro ao atualizar registro");
    } else {
      return new Error("Erro ao identificar e atualizar registro");
    }    


    

  } catch (error) {
    console.error(error);
    return new Error("Erro ao atualizar registro");
  }

};
