import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { TransacaoProvider } from "../../database/providers";
import { TransacaoType, ITransacao } from "../../database/models";

interface IParamProps {
  id?: number,
}

interface IBodyProps extends Omit<ITransacao, "id_transacao" | "date" | "id_usuario">{}

export const updateByIdValidation = validation(getSchema => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().required().moreThan(0)
  })),
  body: getSchema<IBodyProps>(yup.object().shape({
    valor: yup.number().required().moreThan(0),
    id_tipos_transacao: yup.mixed<TransacaoType>().oneOf(Object.values(TransacaoType)).required(),
  }))
}));

export const updateById = async (req: Request<IParamProps>, res: Response) => {


  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: "O parâmetro 'id' é obrigatório"
      }
    });
  }

  const result = await TransacaoProvider.updateById(req.params.id, req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.OK).end();
};
