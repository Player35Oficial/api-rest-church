import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Transacao: Dizimo - Get All", () => {
  it("Lista todos os registro", async () => {
    const res1 = await testServer
      .get("/transacao").send();
      
    
    expect(res1.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });

}); 
