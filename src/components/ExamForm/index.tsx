import { Container } from "./styles";

export function ExamForm() {
  return (
    <Container>
      <form>
        <div className="logo_header">
          
          
        </ div>
        <div className="patient_access">
          
        </ div>

        <div className="login">
          <label htmlFor="input"></label>
          <input type="text" name="Login" placeholder="CPF" />
        </div>

        <div className="pw">
          <label htmlFor="input"></label>
          <input type="password" name="Senha" placeholder="Data de nascimento" />{" "}
        </div>

        <input type="submit" name="ação" value="Entrar" />

        <div className="line" ></div>
      </form>
    </Container>
  )
}