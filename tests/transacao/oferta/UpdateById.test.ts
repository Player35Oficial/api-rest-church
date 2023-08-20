import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Oferta: UpdateById", () => {
  it("Atualiza um registro de oferta", async () => {
    
    const reg = await testServer.post("/transacao").send(
      {
        "id_tipos_transacao": "oferta",
        "valor": 10,
        "id_usuario": 5
      }
    );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const res = await testServer
      .put("/transacao/oferta/1")
      .send({ valor: 125 });

    expect(res.status).toEqual(StatusCodes.OK);
  });
});
