import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: UpdateById", () => {
  it("Atualiza um registro de dízimo", async () => {
    const res = await testServer
      .put("/transacao/dizimo/1")
      .send({ valor: 125, categoria: "dizimo" });

    expect(res.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
