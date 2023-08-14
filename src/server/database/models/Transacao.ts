
export interface ITransacao {
  id_transacao: number,
  id_usuario: number,
  id_tipos_transacao: TransacaoType,
  valor: number,
  date: Date,
}

export enum TransacaoType {
  DIZIMO = "dizimo",
  OFERTA = "oferta",
}
