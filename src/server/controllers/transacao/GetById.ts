import { Request, Response } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middlewares";
import { TransacaoProvider } from "../../database/providers";

interface IParamProps {
  id?: number
}

export const getByIdValidation = validation(getSchema => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().required().moreThan(0)
  }))
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {

  if(!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: "O Parâmetro 'id' precisa ser informado"
      }
    });
  }
  const result = await TransacaoProvider.getById(req.params.id);
  

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
