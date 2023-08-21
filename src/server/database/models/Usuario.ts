

export interface IUsuario {
  id_usuario: number,
  nome: string,
  email: string,
  senha: string,
  cargo: string,
}

export enum EUserRoles {
  admin = "admin",
  membro = "membro",
  tesoureiro = "tesoureiro"
}
