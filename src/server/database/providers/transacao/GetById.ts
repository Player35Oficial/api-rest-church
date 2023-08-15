import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";

export const getById = async (id: number) => {
  
  try {
    
    const result  = await Knex(ETableNames.transacao).select("*").where("id", "=" , id).first();
    
    if (result) return result;
    return new Error("Erro ao procurar registro");

  } catch (error) {
    console.error(error);
    return new Error("Erro ao procurar registro");
  }
};
