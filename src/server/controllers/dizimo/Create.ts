import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface IDizimo {
  valor: number;
  categoria: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IDizimo>(yup.object().shape({
    valor: yup.number().required(),
    categoria: yup.string().required().min(5),
  })),
}));

export const create = async (req: Request<{}, {}, IDizimo>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).send("Create!");
};
