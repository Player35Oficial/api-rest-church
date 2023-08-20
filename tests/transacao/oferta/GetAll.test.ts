import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Oferta: Get All", () => {
  it("Lista todos os registros de oferta", async () => {
    const res1 = await testServer
      .get("/transacao/oferta").send();
      
    expect(res1.status).toEqual(StatusCodes.OK);
  });

}); 
