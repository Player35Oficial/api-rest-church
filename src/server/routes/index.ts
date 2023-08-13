import { Router } from "express";
import { DizimoController } from "../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá, dev!");
});

router.post("/dizimo", DizimoController.createValidation, DizimoController.create);
router.get("/dizimo", DizimoController.getAllValidation, DizimoController.getAll);

export { router };
