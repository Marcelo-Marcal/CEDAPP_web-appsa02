import { Header } from "../Header";
import { Container } from "./styles";

export function Form() {
  return (
    <Container>
      <Header/>
      <form>       
        <div className="form-login">
          <label htmlFor="name-login">Login: </label>
          <input type="text" name="Login" placeholder="Login" />
        </div>
        <div className="form-pw"> 
          <label htmlFor="name-password">Senha: </label>
          <input type="password" name="Senha" placeholder="Senha" />   
        </div>
          <input type="submit" name="ação" value="Enviar" />       
        <div className="line" ></div>
      </form>
      
      {/* <Header/>
      <form>
        <tr>
          <td><label htmlFor="form-login">Login:</label></td>
          <td><input type="text" name="Login" placeholder="Login"/></td>
        </tr>
        <tr>
          <td><label htmlFor="form-pw">Senha:</label></td>
          <td><input type="password" name="Senha" placeholder="Senha"/></td>
        </tr>
        <tr>
          <td><label htmlFor="Bottom"></label></td>
          <td><input type="submit" name="ação" placeholder="Enviar"/></td>
        </tr>
      </form> */}
    </Container>
  );
}