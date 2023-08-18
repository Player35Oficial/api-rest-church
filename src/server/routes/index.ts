import { Router } from "express";
import { TransacoesController } from "../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá, dev!");
});

// Todas as transações
router.get("/transacao", TransacoesController.getAllValidation, TransacoesController.getAll);

// Todas as transacoes - Dizimo
router.get("/transacao/", TransacoesController.getAllValidation, TransacoesController.getAll);
router.get("/transacao/:id_tipos_transacao", TransacoesController.getAllValidation, TransacoesController.getAll);
router.post("/transacao/", TransacoesController.createValidation, TransacoesController.create);
router.get("/transacao/:id_tipos_transacao/:id", TransacoesController.getByIdValidation, TransacoesController.getById);
router.delete("/transacao/:id_tipos_transacao/:id", TransacoesController.deleteByIdValidation, TransacoesController.deleteById);
router.put("/transacao/:id_tipos_transacao/:id", TransacoesController.updateByIdValidation, TransacoesController.updateById);

// Todas as transacoes - Oferta
// router.get("/transacao/oferta", TransacoesController.getAllValidation, TransacoesController.getAll);
// router.get("/transacao/dizimo", TransacoesController.getAllValidation, TransacoesController.getAll);
// router.post("/transacao/oferta", TransacoesController.createValidation, TransacoesController.create);
// router.get("/transacao/oferta/:id", TransacoesController.getByIdValidation, TransacoesController.getById);
// router.delete("/transacao/oferta/:id", TransacoesController.deleteByIdValidation, TransacoesController.deleteById);
// router.put("/transacao/oferta/:id", TransacoesController.updateByIdValidation, TransacoesController.updateById);

export { router };
