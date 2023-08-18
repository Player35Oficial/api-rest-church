import { Request, Response } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middlewares";
import { TransacaoProvider } from "../../database/providers";
import { TransacaoType } from "../../database/models";

interface IParamProps {
  id?: number,
  id_tipos_transacao?: string,
}

export const getByIdValidation = validation(getSchema => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().required().moreThan(0),
    id_tipos_transacao: yup.mixed<TransacaoType>().oneOf(Object.values(TransacaoType)).required(),
  }))
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);

  if(!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: "O Parâmetro 'id' precisa ser informado"
      }
    });
  } else if (!req.params.id_tipos_transacao) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: "O Parâmetro 'id_tipos_transacao' precisa ser informado"
      }
    });
  }
  const result = await TransacaoProvider.getById(req.params.id, req.params.id_tipos_transacao);
  

  if (result instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  } else {
    return res.status(StatusCodes.OK).send(result);
  }

};
