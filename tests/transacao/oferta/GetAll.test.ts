import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Oferta: Get All", () => {
  let accessToken: string;
  beforeAll(async () => {
    const email = "listingOfertas@email.com";
    await testServer.post("/cadastrar").send({ nome: "Oferalda", email, senha: "123456789", cargo: "membro" });

    const signInRes = await testServer.post("/entrar").send({ email, senha: "123456789" });

    accessToken = signInRes.body.accessToken;
  });

  it("Lista todos os registros de oferta", async () => {
    const res1 = await testServer
      .get("/transacao/oferta")
      .set({ authorization: "Bearer "+accessToken })
      .send();
      
    expect(res1.status).toEqual(StatusCodes.OK);
  });

}); 
