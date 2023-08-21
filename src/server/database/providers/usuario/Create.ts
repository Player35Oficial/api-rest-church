import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IUsuario } from "../../models";


export const create = async (usuario: Omit<IUsuario, "id_usuario">): Promise<number | Error> => {
  
  try {
    const [ result ] = await Knex(ETableNames.usuario).insert(usuario).returning("id_usuario");
    if (typeof result === "object") {
      return result.id_usuario;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Erro ao cadastrar registro");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao cadastrar registro");
  }
};
