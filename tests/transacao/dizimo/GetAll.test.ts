import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: GetAll", () => {
  it("Lista todos os registros de dizimo", async () => {
    const res1 = await testServer
      .get("/transacao/dizimo").send();
      
    
    expect(res1.status).toEqual(StatusCodes.OK);
  });

}); 
