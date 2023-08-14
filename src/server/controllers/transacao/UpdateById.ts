import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface IParamProps {
  id?: number,
}

interface ITransacao {
  valor: number;
  categoria: string;
}

export const updateByIdValidation = validation(getSchema => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().required().moreThan(0)
  })),
  body: getSchema<ITransacao>(yup.object().shape({
    valor: yup.number().required().moreThan(0),
    categoria: yup.string().required().min(4)
  }))
}));

export const updateById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);
  console.log(req.body);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!");
};
