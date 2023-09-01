import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("Login: Usuário", () => {
  it("Faz login", async () => {
    const usuarioExistente =await testServer
      .post("/cadastrar")
      .send({
        nome: "Testinson",
        email: "teste@mail.com",
        senha: "123456789",
        cargo: "membro"
      });
    
    expect(usuarioExistente.status).toEqual(StatusCodes.CREATED);
    expect(typeof usuarioExistente.body).toEqual("number");

    const res = await testServer
      .post("/entrar")
      .send({ email: "teste@mail.com", senha: "123456789" });
    
    expect(res.status).toEqual(StatusCodes.OK);
    expect(res.body).toHaveProperty("accessToken");
  });

  it("Tenta fazer login com usuário que não existe", async () => {
    
    const res = await testServer
      .post("/entrar")
      .send({ email: "unknow@mail.com", senha: "123456789" });
    
    expect(res.status).toEqual(StatusCodes.UNAUTHORIZED);
  });
  it("Tenta fazer login sem enviar senha", async () => {
    
    const res = await testServer
      .post("/entrar")
      .send({ email: "teste@mail.com", senha: "" });
    
    expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
  });
});
// Carta aberta para eu mesmo: neste dia eu não estava com disposição para absolutamente nada, isso aqui e o commit anterior são uma vitória e tanto.
