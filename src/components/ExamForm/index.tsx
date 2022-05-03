import { Container } from "./styles";

export function ExamForm() {
  return (
    <Container>
      <form>s
        <div className="logo_header">
          <p>Faça</p>
          <div className="medical_access">
            {/* <input className="radio1" type="radio" id="access1" name="radio" value="CRM" v-model="checked" />
            <label className="medical" htmlFor="medical"> Acesso médico </ label>                   */}
          </ div>          
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