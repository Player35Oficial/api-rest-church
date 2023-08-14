import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { ITransacao, TransacaoType } from "../../database/models";

interface IBodyProps extends Omit<ITransacao, "id_usuario" | "id_transacao" | "date">{}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    amount: yup.number().required(),
    type: yup.mixed<TransacaoType>().oneOf(Object.values(TransacaoType)).required(),
  })),
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).send("Create!");
};
