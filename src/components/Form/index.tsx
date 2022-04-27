// import { Header } from "../Header";
import { Container } from "./styles";

export function Form() {
   
  return (
    <Container>      
     <form>
     <p>Faça seu login</p>
        <div className="medical_access">
          <input className="radio1" type="radio" id="access1" name="radio" value="1" />
          <label htmlFor="medical"> Acesso médico </ label>
          
        </ div>
        <div className="patient_access">
          <input className="radio2" type="radio" id="access2" name="radio" value="2" />
          <label htmlFor="patient"> Acesso paciente </ label>
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
  );
}





// export function Form() {
//   return (
//     <Container>
//       {/* <Header/>       */}
//       <form>
//       <p>Faça seu login</p>       
//         <div className="form-login">
//           <label htmlFor="name-login">Login: </label>
//           <input type="text" name="Login" placeholder="Login" />
//         </div>
//         <div className="form-pw"> 
//           <label htmlFor="name-password">Senha: </label>
//           <input type="password" name="Senha" placeholder="Senha" />   
//         </div>
//           <input type="submit" name="ação" value="Enviar" />       
//         <div className="line" ></div>
//       </form>     
//     </Container>
//   );
// }