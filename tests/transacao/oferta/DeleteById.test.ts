import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Oferta: DeleteById", () => {
  let accessToken: string;
  beforeAll(async () => {
    const email = "deleteById@email.com";
    await testServer.post("/cadastrar").send({ nome: "Delecid", email, senha: "123456789", cargo: "admin" });

    const signInRes = await testServer.post("/entrar").send({ email, senha: "123456789" });

    accessToken = signInRes.body.accessToken;
  });

  it("Tenta excluir um registro sem estar autenticado", async () => { 
    const reg = await testServer
      .post("/transacao")
      .set({ authorization: "Bearer "+accessToken })
      .send(
        {
          "id_tipos_transacao": "oferta",
          "valor": 10,
          "id_usuario": 5
        }
      );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .delete("/transacao/oferta/1");

    expect(res.status).toEqual(StatusCodes.UNAUTHORIZED);
  });

  it("Exclui um registro de oferta", async () => {

    const reg = await testServer
      .post("/transacao")
      .set({ authorization: "Bearer "+accessToken })
      .send(
        {
          "id_tipos_transacao": "oferta",
          "valor": 10,
          "id_usuario": 5
        }
      );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .delete("/transacao/oferta/1")
      .set({ authorization: "Bearer "+accessToken });

    expect(res.status).toEqual(StatusCodes.NO_CONTENT);
  });

  it("Tenta excluir um registro de oferta pela rota de dizimo", async () => {
    const reg = await testServer
      .post("/transacao")
      .set({ authorization: "Bearer "+accessToken })
      .send(
        {
          "id_tipos_transacao": "oferta",
          "valor": 10,
          "id_usuario": 5
        }
      );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .delete("/transacao/dizimo/1").set({ authorization: "Bearer "+accessToken });

    expect(res.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
