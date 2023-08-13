import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

interface IDizimo {
  valor: number;
  categoria: string;
}

export const create = (req: Request<{}, {}, IDizimo>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).send("Create!");
};
