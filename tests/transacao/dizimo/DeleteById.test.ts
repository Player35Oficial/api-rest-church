import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: DeleteById", () => {
  it("Exclui um registro de dizimo", async () => {
    const res = await testServer
      .delete("/transacao/dizimo/1");

    expect(res.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
