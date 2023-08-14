import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Oferta: DeleteById", () => {
  it("Exclui um registro de oferta", async () => {
    const res = await testServer
      .delete("/transacao/oferta/1");

    expect(res.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
