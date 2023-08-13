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

// Todas as transacoes - Oferta
router.get("/transacao/oferta", TransacoesController.getAllValidation, TransacoesController.getAll);

export { router };
