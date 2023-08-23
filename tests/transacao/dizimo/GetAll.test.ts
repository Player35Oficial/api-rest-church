import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: GetAll", () => {
  let accessToken: string;
  beforeAll(async () => {
    const email = "listingDizimos@email.com";
    await testServer.post("/cadastrar").send({ nome: "geraldo", email, senha: "123456789", cargo: "membro" });

    const signInRes = await testServer.post("/entrar").send({ email, senha: "123456789" });

    accessToken = signInRes.body.accessToken;
  });

  it("Tenta listar registros sem estar autenticado", async () => {
    const res1 = await testServer
      .get("/transacao/dizimo")
      .send();
    
    expect(res1.status).toEqual(StatusCodes.UNAUTHORIZED);
  });

  it("Lista todos os registros de dizimo", async () => {
    const res1 = await testServer
      .get("/transacao/dizimo")
      .set({ authorization: "Bearer " + accessToken })
      .send();
    
    expect(res1.status).toEqual(StatusCodes.OK);
  });

}); 
