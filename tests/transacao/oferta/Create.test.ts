import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Oferta: Create", () => {
  it("Cria registro de oferta", async () => {
    const res = await testServer
      .post("/transacao/oferta")
      .send({ valor: 120, categoria: "oferta" });
    
    expect(res.status).toEqual(StatusCodes.CREATED);
  });
});
