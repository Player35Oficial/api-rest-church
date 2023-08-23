import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("Transacao: Get All", () => {
  let accessToken: string;
  beforeAll(async () => {
    const email = "listingTransactions@email.com";
    await testServer.post("/cadastrar").send({ nome: "geraldo", email, senha: "123456789", cargo: "membro" });

    const signInRes = await testServer.post("/entrar").send({ email, senha: "123456789" });

    accessToken = signInRes.body.accessToken;
  });

  it("Lista todos os registros de transacao", async () => {
    const res1 = await testServer
      .get("/transacao")
      .set({ authorization: "Bearer "+accessToken })
      .send();
      
    
    expect(res1.status).toEqual(StatusCodes.OK);
  });

}); 
