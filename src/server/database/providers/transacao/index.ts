import * as create from "./Create";
import * as getAll from "./GetAll";
import * as Count from "./Count";
import * as deleteById from "./DeleteById";
import * as getById from "./GetById";
import * as updateById from "./UpdateById";

export const TransacaoProvider = {
  ...create,
  ...getAll,
  ...Count,
  ...deleteById,
  ...getById,
  ...updateById,
};
