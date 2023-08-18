import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";


export const deleteById = async (id: number, id_tipos_transacao: string): Promise <void | Error>  => {

  let repoToDelete;
  try {
    repoToDelete = await Knex(ETableNames.transacao).where("id", id).first();
    if (repoToDelete.id_tipos_transacao !== id_tipos_transacao) {
      return new Error("Erro ao excluir registro");
    } else {
      repoToDelete = await Knex(ETableNames.transacao).where("id", id).first().del();
    }


    if (repoToDelete > 0) return;
    return new Error("Erro ao excluir registro");
  } catch (error) {
    console.error(error);
    return new Error("Erro ao excluir registro");
  }

};
