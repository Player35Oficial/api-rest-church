import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { EUserRoles, IUsuario } from "../../database/models";
import { Request, Response } from "express";
import { UsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";

interface IBodyProps extends Omit<IUsuario, "id_usuario"> { }

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().min(3).max(60).required(),
    email: yup.string().min(6).max(60).required(),
    senha: yup.string().min(8).required(),
    cargo: yup.mixed<EUserRoles>().oneOf(Object.values(EUserRoles)).required(),
  }))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => { 
  
  const result = await UsuariosProvider.create(req.body);
  
  
  if (result instanceof Error) {
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      }
    });
  }


  return res.status(StatusCodes.CREATED).json(result);
};
