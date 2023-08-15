import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { ITransacao } from "../../models";


export const updateById = async (id: number, data: Omit<ITransacao, "id" | "id_usuario" | "date">) => {

  try {
    
    const result = await Knex(ETableNames.transacao).where("id", "=", id).update(data).returning("id");

    if (result) return result;
    return new Error("Erro ao atualizar registro");

  } catch (error) {
    console.error(error);
    return new Error("Erro ao atualizar registro");
  }

};
