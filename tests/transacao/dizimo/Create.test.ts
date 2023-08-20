import { StatusCodes } from "http-status-codes";
import { testServer } from "../../jest.setup";


describe("Dizimo: Create", () => {
  it("Cria registro de dizimo", async () => {
    const res = await testServer
      .post("/transacao/")
      .send({
        "id_tipos_transacao": "dizimo",
        "valor": 200,
        "id_usuario": 5
      });
    console.log(res.body);
    expect(res.status).toEqual(StatusCodes.CREATED);
  });

  it("Ausência de parâmetro - Tenta criar registro vazio", async () => {
    const res = await testServer
      .post("/transacao/")
      .send({});
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body");
  });

  it("Ausência de parâmetro - Tenta criar registro sem valor", async () => {
    const res = await testServer
      .post("/transacao/")
      .send({
        "id_tipos_transacao": "dizimo",
        "id_usuario": 5
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.valor");
  });

  it("Ausência de parâmetro - Tenta criar registro sem tipo de transacao", async () => {
    const res = await testServer
      .post("/transacao/")
      .send({
        "valor": 10,
        "id_usuario": 5
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.id_tipos_transacao");
  });

  it("Ausência de parâmetro - Tenta criar registro sem id de usuário", async () => {
    const res = await testServer
      .post("/transacao/")
      .send({
        "valor": 10,
        "id_tipos_transacao": "dizimo"
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.id_usuario");
  });

  it("Tipo de dado incorreto - tenta criar transação com tipo de valor: string", async () => {
    const res = await testServer
      .post("/transacao/")
      .send({
        "id_tipos_transacao": "dizimo",
        "valor": "10",
        "id_usuario": 5
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.valor");
  });

  it("Tipo de dado incorreto - tenta criar transação com tipo de valor: array", async () => {
    const res = await testServer
      .post("/transacao/")
      .send({
        "id_tipos_transacao": "dizimo",
        "valor": [ 10, 50 ],
        "id_usuario": 5
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.valor");
  });

  it("Tipo de dado incorreto - tenta criar transação com tipo de valor: objeto", async () => {
    const res = await testServer
      .post("/transacao/")
      .send({
        "id_tipos_transacao": "dizimo",
        "valor": { valor: 10 },
        "id_usuario": 5
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.valor");
  });

  it("Tipo de dado incorreto - tenta criar transação com tipo de valor: boolean", async () => {
    const res = await testServer
      .post("/transacao/")
      .send({
        "id_tipos_transacao": "dizimo",
        "valor": true,
        "id_usuario": 5
      });
  
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.valor");
  });
});
