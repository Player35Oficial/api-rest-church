import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Oferta: GetById", () => {
  let accessToken: string;
  beforeAll(async () => {
    const email = "listingTransactions@email.com";
    await testServer.post("/cadastrar").send({ nome: "geraldo", email, senha: "123456789", cargo: "membro" });

    const signInRes = await testServer.post("/entrar").send({ email, senha: "123456789" });

    accessToken = signInRes.body.accessToken;
  });

  it("Lista um registro pelo id", async () => {
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

    const singleOferta = await testServer
      .get("/transacao/oferta/1").set({ authorization: "Bearer "+accessToken });

    expect(singleOferta.status).toEqual(StatusCodes.OK);
  });

  it("Tenta listar um registro que não existe", async () => { 
    const nothing = await testServer.get("/transacao/oferta/99999").set({ authorization: "Bearer "+accessToken });
    console.log(nothing.body);
    expect(nothing.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
