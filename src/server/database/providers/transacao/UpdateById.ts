import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { ITransacao } from "../../models";


export const updateById = async (id_usuario: number ,id: number, id_tipos_transacao: string, valor: number) => {

  try {

    const repo: ITransacao = await Knex(ETableNames.transacao).where("id", "=", id).first();
    console.log(id_tipos_transacao === repo.id_tipos_transacao && id_usuario === repo.id_usuario);
    if (id_tipos_transacao === repo.id_tipos_transacao && id_usuario === repo.id_usuario) {
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
