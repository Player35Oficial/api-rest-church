import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: UpdateById", () => {
  let accessToken: string;
  beforeAll(async () => {
    const email = "updateByIdAdmin@email.com";
    await testServer.post("/cadastrar").send({ nome: "Rupaldi", email, senha: "123456789", cargo: "admin" });

    const signInRes = await testServer.post("/entrar").send({ email, senha: "123456789" });

    accessToken = signInRes.body.accessToken;
  });

  it("Tenta atualizar um registro de dízimo sem estar autenticado", async () => { 
    const reg = await testServer
      .post("/transacao")
      .set({ authorization: "Bearer "+accessToken })
      .send(
        {
          "id_tipos_transacao": "dizimo",
          "valor": 10,
          "id_usuario": 1
        }
      );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .put("/transacao/dizimo/1")
      .send({ valor: 125 });

    expect(res.status).toEqual(StatusCodes.UNAUTHORIZED);
  });

  it("Atualiza um registro de dízimo", async () => {

    const reg = await testServer
      .post("/transacao")
      .set({ authorization: "Bearer "+accessToken })
      .send(
        {
          "id_tipos_transacao": "dizimo",
          "valor": 10,
          "id_usuario": 1
        }
      );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .put("/transacao/dizimo/1")
      .set({ authorization: "Bearer "+accessToken })
      .send({ valor: 125 });

    expect(res.status).toEqual(StatusCodes.OK);
  });
});
