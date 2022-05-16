import { useState } from "react";
import { Container } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../auth";
import { Link } from "react-router-dom";
// import { mask } from "../../util/format";
// import { useForm } from "react-hook-form";
// import { api } from "../../serveles";

type PropsUser ={
  cpf: string,
  crm: string,
  isDoctor: boolean
}



export function Login() {

  const [valuePlaceHolder, setValuePlaceHolder] = useState(false);

  const [user, setUser] = useState<PropsUser>({
    cpf: "",
    crm: "",
    isDoctor: true
  });
  const { signIn } = useContext(AuthContext);
const handleInputCrm = (e: any) => {
    setUser({
      ...user,
      crm: e.currentTarget.value,
    });
}
const handleInputCpf = (e: any) => {
  setUser({
    ...user,
    cpf: e.currentTarget.value,
  });
}


const handleSubmit =  (event: any) => {
  event.preventDefault()
  signIn(user)
}
return (
    <Container>
     <form>
        <p>Faça seu login</p>
        <div className="medical_access">
          <input className="radio1" type="radio" id="access1" name="radio" value="CRM" v-model="checked"
            onChange={() => {
              setValuePlaceHolder(!valuePlaceHolder)
            }}
          />
          <label className="medical" htmlFor="medical"> Acesso médico </ label>
        </ div>
        <div className="patient_access">
          <input className="radio2" type="radio" id="access2" name="radio" value="CPF" v-model="checked"
            onChange={() => {
              setValuePlaceHolder(!valuePlaceHolder)
              // setValuePlaceHolder2('Data de nascimento')
            }}
          />
          <label className="patient" htmlFor="patient"> Acesso paciente </ label>
        </ div>

        <div className="login">
          <label htmlFor="input"></label>
          <input
            type="number"
            name="crm"
            placeholder={valuePlaceHolder? "CRM": "CPF"}
            onChange={handleInputCrm}
            value={user.crm}
            // ref={register()}
          />
        </div>
        <div className="pw">
          <label htmlFor="input"></label>
          <input
            type="text"
            name="cpf"
            placeholder={valuePlaceHolder? "CPF": "Data de nascimento"}
            onChange={handleInputCpf}
            value={user.cpf}
            // ref={register()}
          />{" "}
        </div>
        <a href="/dashboard">
          <button  onClick={handleSubmit} name="ação" value="Entrar" >Entrar</button>
        </a>

        <div className="line" ></div>
      </form>
      <footer>
      </footer>
    </Container>
  );
}

// export const Input = forwardRef()