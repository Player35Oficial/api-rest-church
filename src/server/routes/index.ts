import { Router } from "express";
import { DizimoController } from "../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá, dev!");
});

router.post("/teste", DizimoController.create);

export { router };
