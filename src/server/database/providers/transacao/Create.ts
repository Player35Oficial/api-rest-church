import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { ITransacao } from "../../models";


export const create = async (transacao: Omit<ITransacao, "id_transacao" | "date">): Promise<number | Error> => {

  try {
    const [ result ] = await Knex(ETableNames.transacao).insert(transacao).returning("id");
    console.log(result);
    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }

    return new Error("Erro ao cadastrar o registro");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao cadastrar o registro");
  }

};
