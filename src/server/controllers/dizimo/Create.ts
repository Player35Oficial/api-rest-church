import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface IDizimo {
  valor: number;
  categoria: string;
}

const bodyValidation: yup.Schema<IDizimo> = yup.object().shape({
  categoria: yup.string().required().min(5),
  valor: yup.number().required().moreThan(0),
});

export const create = async (req: Request<{}, {}, IDizimo>, res: Response) => {
  let validatedData: IDizimo | undefined;

  try {
    validatedData = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const validationErrors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (error.path === undefined) return;
      validationErrors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErrors,
    });
  }

  console.log(validatedData);

  return res.status(StatusCodes.CREATED).send("Create!");
};
