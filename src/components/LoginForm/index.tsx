// import { Header } from "../Header";
import { Container } from "./styles";

export function LoginForm() {
   
  return (
    <Container>      
     <form>
     <p>Faça seu login</p>
        <div className="medical_access">
          <input className="radio1" type="radio" id="access1" name="radio" value="CRM" v-model="checked" />
          <label className="medical" htmlFor="medical"> Acesso médico </ label>                  
        </ div>
        <div className="patient_access">
          <input className="radio2" type="radio" id="access2" name="radio" value="CPF" v-model="checked"/>
          <label className="patient" htmlFor="patient"> Acesso paciente </ label>
        </ div>      

        <div className="login">
          <label htmlFor="input"></label>
          <input type="number" name="Login" placeholder="CPF" cpf-mask="000.000.000-00"/>
        </div>
        <div className="pw">
          <label htmlFor="input"></label>
          <input type="password" name="Senha" placeholder="Data de nascimento" date-mask="00/00/0000" />{" "}
        </div>

        <input type="submit" name="ação" value="Entrar" />

        <div className="line" ></div>
      </form>
    </Container>
  );
}