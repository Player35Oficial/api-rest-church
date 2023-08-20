import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: DeleteById", () => {
  it("Exclui um registro de dizimo", async () => {

    const reg = await testServer.post("/transacao").send(
      {
        "id_tipos_transacao": "dizimo",
        "valor": 10,
        "id_usuario": 5
      }
    );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .delete("/transacao/dizimo/1");

    expect(res.status).toEqual(StatusCodes.NO_CONTENT);
  });

  it("Tenta excluir um registro de dizimo pela rota de oferta", async () => {
    const reg = await testServer.post("/transacao").send(
      {
        "id_tipos_transacao": "dizimo",
        "valor": 10,
        "id_usuario": 5
      }
    );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .delete("/transacao/oferta/1");

    expect(res.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });

  it("Tenta excluir um registro de dizimo que não existe", async () => { 
    const existe = await testServer.post("/transacao").send({
      "id_tipos_transacao": "dizimo",
      "valor": 10,
      "id_usuario": 5
    });

    expect(existe.status).toEqual(StatusCodes.CREATED);

    const res = await testServer.delete("/transacao/dizimo/99999").send();

    expect(res.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
