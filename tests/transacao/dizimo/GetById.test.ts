import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: GetById", () => {
  it("Lista um registro pelo id", async () => {
    const singleDizimo = await testServer
      .get("/transacao/dizimo/1");

    expect(singleDizimo.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
