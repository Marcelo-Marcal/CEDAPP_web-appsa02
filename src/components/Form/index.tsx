import { Container } from "./styles";

export function Form() {
  return (
    <Container>      
      <form>
        {/* <div className="p1">
        <p>Login</p> */}
        {/* </div> */}
          <input type="text" name="Login" placeholder="Login" />
        {/* <p>Senha</p> */}
          <input type="password" name="Senha" placeholder="Senha" />        
          <input type="submit" name="ação" value="Enviar" />       
      </form>
    </Container>
  );
}