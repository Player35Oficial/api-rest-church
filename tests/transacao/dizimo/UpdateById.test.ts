import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: UpdateById", () => {
  let accessToken: string;
  beforeAll(async () => {
    const email = "listingTransactions@email.com";
    await testServer.post("/cadastrar").send({ nome: "geraldo", email, senha: "123456789", cargo: "membro" });

    const signInRes = await testServer.post("/entrar").send({ email, senha: "123456789" });

    accessToken = signInRes.body.accessToken;
  });

  it("Atualiza um registro de dízimo", async () => {

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
      .put("/transacao/dizimo/1")
      .set({ authorization: "Bearer "+accessToken })
      .send({ valor: 125 });

    expect(res.status).toEqual(StatusCodes.OK);
  });
});
