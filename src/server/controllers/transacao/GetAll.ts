import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middlewares";
import * as yup from "yup";
import { TransacaoProvider } from "../../database/providers";


interface IQueryProps {
  page?: number,
  limit?: number,
  filter?: string,
}

export const getAllValidation = validation((getSchema => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional(),
  })),
})));

export const getAll = async (req:Request<{},{},{}, IQueryProps>, res: Response) => {
  const { limit, page } = req.query;

  const path = (req.path.split("/").pop());

  switch (path) {
    case "dizimo":
      req.query.filter = "dizimo";
      break;
    case "oferta":
      req.query.filter = "oferta";
      break;
    default:
      req.query.filter = "";
  }
  
  const results = await TransacaoProvider.getAll(req.query.filter || "", limit || 10, page || 1);

  if (results instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: results.message
      }
    });
  }
  

  return res.status(StatusCodes.OK).json(results);
};
