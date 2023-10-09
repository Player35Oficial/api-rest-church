import express from "express";
import cors from "cors";
import "dotenv/config";
import swaggerUi from "swagger-ui-express";

import "./shared/services/TranslationsYup";
import { router } from "./routes";

import swaggerDocs from "./swagger.json";

const server = express();

server.use(
  cors({
    origin: "http://localhost:4200",
  })
);
server.use(express.json());

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.use(router);

export { server };
