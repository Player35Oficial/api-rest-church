import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Usuario: create", () => {
  it("Cria usuário - Membro", async () => {
    const res = await testServer
      .post("/cadastrar")
      .send({
        nome: "Testinson",
        email: "teste@mail.com",
        senha: "123456789",
        cargo: "membro"
      });
    
    expect(res.status).toEqual(StatusCodes.CREATED);
    expect(typeof res.body).toEqual("number");
  });

  it("Cria usuário - Admin", async () => {
    const res = await testServer
      .post("/cadastrar")
      .send({
        nome: "Admilson",
        email: "admin@mail.com",
        senha: "123456789",
        cargo: "admin"
      });
    
    expect(res.status).toEqual(StatusCodes.CREATED);
    expect(typeof res.body).toEqual("number");
  });

  it("Cria usuário - Tesoureiro", async () => {
    const res = await testServer
      .post("/cadastrar")
      .send({
        nome: "Tesounilson",
        email: "tesouraria@mail.com",
        senha: "123456789",
        cargo: "tesoureiro"
      });
    
    expect(res.status).toEqual(StatusCodes.CREATED);
    expect(typeof res.body).toEqual("number");
  });

  it("Tenta criar usuário com cargo fora da tabela", async () => {
    const res = await testServer
      .post("/cadastrar")
      .send({
        nome: "Rosana",
        email: "secretaria@mail.com",
        senha: "123456789",
        cargo: "Secretaria"
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.cargo");
  });

  it("Tenta criar usuário sem nome", async () => {
    const res = await testServer
      .post("/cadastrar")
      .send({
        nome: "",
        email: "secretaria@mail.com",
        senha: "123456789",
        cargo: "membro"
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.nome");
  });

  it("Tenta criar usuário sem email", async () => {
    const res = await testServer
      .post("/cadastrar")
      .send({
        nome: "Joao",
        email: "",
        senha: "123456789",
        cargo: "membro"
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.email");
  });

  it("Tenta criar usuário sem senha", async () => {
    const res = await testServer
      .post("/cadastrar")
      .send({
        nome: "Joao",
        email: "donjhoe@mail.com",
        senha: "",
        cargo: "membro"
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.senha");
  });

  it("Tenta criar usuário sem cargo", async () => {
    const res = await testServer
      .post("/cadastrar")
      .send({
        nome: "Joao",
        email: "donjhoe@mail.com",
        senha: "123456789",
        cargo: ""
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.cargo");
  });

  it("Tenta criar usuário sem cargo", async () => {
    const res = await testServer
      .post("/cadastrar")
      .send({
        nome: "Joao",
        email: "donjhoe@mail.com",
        senha: "123456789",
        cargo: ""
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.cargo");
  });

  it("Tenta criar usuário sem nada", async () => {
    const res = await testServer
      .post("/cadastrar")
      .send({
        nome: "",
        email: "",
        senha: "",
        cargo: ""
      });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body");
  });
});
