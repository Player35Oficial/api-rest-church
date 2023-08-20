import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Oferta: DeleteById", () => {
  it("Exclui um registro de oferta", async () => {

    const reg = await testServer.post("/transacao").send(
      {
        "id_tipos_transacao": "oferta",
        "valor": 10,
        "id_usuario": 5
      }
    );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .delete("/transacao/oferta/1");

    expect(res.status).toEqual(StatusCodes.NO_CONTENT);
  });

  it("Tenta excluir um registro de oferta pela rota de dizimo", async () => {
    const reg = await testServer.post("/transacao").send(
      {
        "id_tipos_transacao": "oferta",
        "valor": 10,
        "id_usuario": 5
      }
    );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .delete("/transacao/dizimo/1");

    expect(res.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
