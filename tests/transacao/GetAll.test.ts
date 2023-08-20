import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("Transacao: Get All", () => {
  it("Lista todos os registros de transacao", async () => {
    const res1 = await testServer
      .get("/transacao").send();
      
    
    expect(res1.status).toEqual(StatusCodes.OK);
  });

}); 
