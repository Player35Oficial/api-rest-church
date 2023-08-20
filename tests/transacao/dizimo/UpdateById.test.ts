import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: UpdateById", () => {
  it("Atualiza um registro de dízimo", async () => {

    const reg = await testServer.post("/transacao").send(
      {
        "id_tipos_transacao": "dizimo",
        "valor": 10,
        "id_usuario": 5
      }
    );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .put("/transacao/dizimo/1")
      .send({ valor: 125 });

    expect(res.status).toEqual(StatusCodes.OK);
  });
});
