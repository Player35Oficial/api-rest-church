import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Oferta: UpdateById", () => {
  it("Atualiza um registro de oferta", async () => {
    const res = await testServer
      .put("/transacao/oferta/1")
      .send({ valor: 125, categoria: "oferta" });

    expect(res.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
