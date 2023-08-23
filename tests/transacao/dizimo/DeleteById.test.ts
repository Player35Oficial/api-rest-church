import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: DeleteById", () => {
  let accessToken: string;
  beforeAll(async () => {
    const email = "deleteByIdTransactions@email.com";
    await testServer.post("/cadastrar").send({ nome: "delegadilson", email, senha: "123456789", cargo: "admin" });

    const signInRes = await testServer.post("/entrar").send({ email, senha: "123456789" });

    accessToken = signInRes.body.accessToken;
  });

  it("Exclui um registro de dizimo", async () => {

    const reg = await testServer
      .post("/transacao")
      .set({ authorization: "Bearer "+accessToken })
      .send(
        {
          "id_tipos_transacao": "dizimo",
          "valor": 10,
          "id_usuario": 5
        }
      );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .delete("/transacao/dizimo/1")
      .set({ authorization: "Bearer " + accessToken });

    expect(res.status).toEqual(StatusCodes.NO_CONTENT);
  });

  it("Tenta excluir um registro de dizimo pela rota de oferta", async () => {
    const reg = await testServer
      .post("/transacao")
      .set({ authorization: "Bearer "+accessToken })
      .send(
        {
          "id_tipos_transacao": "dizimo",
          "valor": 10,
          "id_usuario": 5
        }
      );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .delete("/transacao/oferta/1")
      .set({ authorization: "Bearer "+accessToken });

    expect(res.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });

  it("Tenta excluir um registro de dizimo que não existe", async () => { 
    const existe = await testServer
      .post("/transacao")
      .set({ authorization: "Bearer "+accessToken })
      .send({
        "id_tipos_transacao": "dizimo",
        "valor": 10,
        "id_usuario": 5
      });

    expect(existe.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .delete("/transacao/dizimo/99999")
      .set({ authorization: "Bearer "+accessToken })
      .send();

    expect(res.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
