import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: Create", () => {
  it("Cria registro de dizimo", async () => {
    const res = await testServer
      .post("/transacao/dizimo")
      .send({ valor: 120, categoria: "dizimo" });
    
    expect(res.status).toEqual(StatusCodes.CREATED);
  });
});
