import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { TransacaoProvider } from "../../database/providers";
import { TransacaoType, ITransacao } from "../../database/models";

interface IParamProps {
  id?: number,
  id_tipos_transacao?: string
}

interface IBodyProps extends Omit<ITransacao, "id_transacao" | "date" | "id_usuario" | "id_tipos_transacao">{}

export const updateByIdValidation = validation(getSchema => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().required().moreThan(0),
    id_tipos_transacao: yup.mixed<TransacaoType>().oneOf(Object.values(TransacaoType)).required()
  })),
  body: getSchema<IBodyProps>(yup.object().shape({
    valor: yup.number().required().moreThan(0)
  }))
}));

export const updateById = async (req: Request<IParamProps>, res: Response) => {


  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: "O parâmetro 'id' é obrigatório"
      }
    });
  } else if (!req.params.id_tipos_transacao) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: "O parâmetro 'id_tipos_transacao' é obrigatório"
      }
    });
  }

  const result = await TransacaoProvider.updateById(req.params.id, req.params.id_tipos_transacao, req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.OK).end();
};
