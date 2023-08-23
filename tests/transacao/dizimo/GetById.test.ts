import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: GetById", () => {
  let accessToken: string;
  beforeAll(async () => {
    const email = "listingDizimoById@email.com";
    await testServer.post("/cadastrar").send({ nome: "Gebidi", email, senha: "123456789", cargo: "membro" });

    const signInRes = await testServer.post("/entrar").send({ email, senha: "123456789" });

    accessToken = signInRes.body.accessToken;
  });

  it("Tenta listar um registro pelo id sem estar autenticado", async () => {
    const reg = await testServer
      .post("/transacao")
      .set({ authorization: "Bearer " + accessToken })
      .send(      
        {
          "id_tipos_transacao": "dizimo",
          "valor": 10,
          "id_usuario": 5
        }
      );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const singleDizimo = await testServer
      .get("/transacao/dizimo/1");

    expect(singleDizimo.status).toEqual(StatusCodes.UNAUTHORIZED);
  });

  it("Lista um registro pelo id", async () => {
    const reg = await testServer
      .post("/transacao")
      .set({ authorization: "Bearer " + accessToken })
      .send(      
        {
          "id_tipos_transacao": "dizimo",
          "valor": 10,
          "id_usuario": 5
        }
      );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const singleDizimo = await testServer
      .get("/transacao/dizimo/1")
      .set({ authorization: "Bearer "+accessToken });

    expect(singleDizimo.status).toEqual(StatusCodes.OK);
  });

  it("Tenta listar um registro que não existe", async () => { 
    const nothing = await testServer.get("/transacao/dizimo/99999").set({ authorization: "Bearer "+accessToken });
    console.log(nothing.body);
    expect(nothing.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
