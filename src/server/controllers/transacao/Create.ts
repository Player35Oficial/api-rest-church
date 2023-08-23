import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { ITransacao, TransacaoType } from "../../database/models";
import { TransacaoProvider } from "../../database/providers";

interface IBodyProps extends Omit<ITransacao, "id_transacao" | "date">{}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    id_tipos_transacao: yup.mixed<TransacaoType>().oneOf(Object.values(TransacaoType)).required(),
    id_usuario: yup.number().required().strict(true),
    valor: yup.number().positive().required().moreThan(0).strict(true),
  })),
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

  const result = await TransacaoProvider.create(req.body);
  
  
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      }
    });
  }

  return res.status(StatusCodes.CREATED).send("Create!");
};
