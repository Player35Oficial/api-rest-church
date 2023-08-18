import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { ITransacao } from "../../models";

export const getById = async (id: number, id_tipos_transacao?: string) => {
  
  try {
    let result: ITransacao;
    if (id_tipos_transacao) {
      result  = await Knex(ETableNames.transacao).select("*").where("id", "=" , id).andWhere("id_tipos_transacao", "=", id_tipos_transacao).first();
      if (result === undefined) {
        return new Error("Erro ao identificar ou procurar registro");
      }
    } else {
      result  = await Knex(ETableNames.transacao).select("*").where("id", "=" , id).first();
    }
    console.log(result);
    if (result) return result;
    return new Error("Erro ao procurar registro");

  } catch (error) {
    console.error(error);
    return new Error("Erro ao procurar registro");
  }
};
