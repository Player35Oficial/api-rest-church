import * as create from "./Create";
import * as getAll from "./GetAll";
import * as Count from "./Count";

export const TransacaoProvider = {
  ...create,
  ...getAll,
  ...Count,
};
