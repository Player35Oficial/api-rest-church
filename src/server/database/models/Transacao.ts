
export interface ITransacao {
  id_transacao: number,
  id_usuario: number,
  type: TransacaoType,
  amount: number,
  date: Date,
}

export enum TransacaoType {
  DIZIMO = "dizimo",
  OFERTA = "oferta",
}
