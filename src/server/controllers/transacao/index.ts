import * as create from "./Create";
import * as getAll from "./GetAll";
import * as deleteById from "./DeleteById";
import * as updateById from "./UpdateById";
import * as getById from "./GetById";

export const TransacoesController = {
  ...create,
  ...getAll,
  ...getById,
  ...deleteById,
  ...updateById,
};
