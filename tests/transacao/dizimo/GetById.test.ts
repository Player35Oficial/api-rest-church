import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: GetById", () => {
  it("Lista um registro pelo id", async () => {
    const reg = await testServer.post("/transacao").send(
      {
        "id_tipos_transacao": "dizimo",
        "valor": 10,
        "id_usuario": 5
      }
    );
    expect(reg.status).toEqual(StatusCodes.CREATED);

    const singleDizimo = await testServer
      .get("/transacao/dizimo/1");

    expect(singleDizimo.status).toEqual(StatusCodes.OK);
  });

  it("Tenta listar um registro que não existe", async () => { 
    const nothing = await testServer.get("/transacao/dizimo/99999");
    console.log(nothing.body);
    expect(nothing.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
