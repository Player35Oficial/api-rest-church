import { Router } from "express";
import { TransacoesController, UsuariosController } from "../controllers";
import { ensureAuthenticated } from "../shared/middlewares";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá, dev!");
});

// Todas as transações
router.get("/transacao/", ensureAuthenticated ,TransacoesController.getAllValidation, TransacoesController.getAll);

// Todas as transacoes
router.get("/transacao/:id_tipos_transacao", ensureAuthenticated, TransacoesController.getAllValidation, TransacoesController.getAll);
router.post("/transacao/", ensureAuthenticated, TransacoesController.createValidation, TransacoesController.create);
router.get("/transacao/:id_tipos_transacao/:id", ensureAuthenticated, TransacoesController.getByIdValidation, TransacoesController.getById);
router.delete("/transacao/:id_tipos_transacao/:id", ensureAuthenticated, TransacoesController.deleteByIdValidation, TransacoesController.deleteById);
router.put("/transacao/:id_tipos_transacao/:id", ensureAuthenticated, TransacoesController.updateByIdValidation, TransacoesController.updateById);


// Usuario
router.post("/cadastrar", UsuariosController.createValidation, UsuariosController.create);
router.post("/entrar", UsuariosController.signInValidation, UsuariosController.signIn);

export { router };
