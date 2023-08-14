import { Knex } from "../../knex";
import { ETableNames } from "../../ETableNames";


export const getAll = async (filter: string, limit: number, page: number, id = 0) => {
  try {
    const results = await Knex(ETableNames.transacao)
      .select("*")
      .where("id", Number(id))
      .orWhereLike("id_tipos_transacao", `%${filter}%`)
      .offset((page - 1) * limit)
      .limit(limit);

    if (id > 0 && results.every(item => item.id !== id)) {
      const resultById = await Knex(ETableNames.transacao)
        .select("*")
        .where("id", "=", id)
        .first(); 
      
      if (resultById) return [ ...results, resultById ];
    }

    return results;
  } catch (error) {
    console.log(error);
    return new Error("Erro ao realizar solicitação");
  }
};
