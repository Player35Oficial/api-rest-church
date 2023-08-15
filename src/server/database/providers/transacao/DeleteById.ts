import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";


export const deleteById = async (id: number): Promise <void | Error>  => {

  try {

    const res = await Knex(ETableNames.transacao).where("id", id).del();

    if (res > 0) return;
    return new Error("Erro ao excluir registro");
  } catch (error) {
    console.error(error);
    return new Error("Erro ao excluir registro");
  }

};
