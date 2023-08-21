import { Request, Response } from "express";
import { IUsuario } from "../../database/models";
import { validation } from "../../shared/middlewares";
import * as yup from "yup";
import { UsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";
import { PasswordCrypto } from "../../shared/services";

interface IBodyProps extends Omit<IUsuario, "id_usuario" | "cargo" | "nome"> { }

export const signInValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    email: yup.string().email().min(6).required(),
    senha: yup.string().min(8).required()
  }))
}));

export const signIn = async (req: Request<{}, {}, IBodyProps>, res: Response) => { 

  const { email, senha } = req.body;

  const usuario = await UsuariosProvider.getByEmail(email);

  if (usuario instanceof Error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Email ou senha Inválidos"
      }
    });
  }

  const passwordMatch = await PasswordCrypto.verifyPassword(senha, usuario.senha);

  if (!passwordMatch) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Email ou senha inválidos"
      }
    });
  } else {
    return res.status(StatusCodes.OK).json({ accessToken: "teste.teste" });
  }

  
};
