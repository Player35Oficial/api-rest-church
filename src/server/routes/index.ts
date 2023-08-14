import { Router } from "express";
import { TransacoesController } from "../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá, dev!");
});

// Todas as transações
router.get("/transacao", TransacoesController.getAllValidation, TransacoesController.getAll);

// Todas as transacoes - Dizimo
router.get("/transacao/dizimo", TransacoesController.getAllValidation, TransacoesController.getAll);
router.post("/transacao/dizimo", TransacoesController.createValidation, TransacoesController.create);
router.get("/transacao/dizimo/:id", TransacoesController.getByIdValidation, TransacoesController.getById);
router.delete("/transacao/dizimo/:id", TransacoesController.deleteByIdValidation, TransacoesController.deleteById);
router.put("/transacao/dizimo/:id", TransacoesController.updateByIdValidation, TransacoesController.updateById);

// Todas as transacoes - Oferta
router.get("/transacao/oferta", TransacoesController.getAllValidation, TransacoesController.getAll);
router.post("/transacao/oferta", TransacoesController.createValidation, TransacoesController.create);
router.get("/transacao/oferta/:id", TransacoesController.getByIdValidation, TransacoesController.getById);
router.delete("/transacao/oferta/:id", TransacoesController.deleteByIdValidation, TransacoesController.deleteById);
router.put("/transacao/oferta/:id", TransacoesController.updateByIdValidation, TransacoesController.updateById);

export { router };
