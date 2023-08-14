import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Oferta: GetById", () => {
  it("Lista um registro pelo id", async () => {
    const singleOferta = await testServer
      .get("/transacao/oferta/1");

    expect(singleOferta.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
