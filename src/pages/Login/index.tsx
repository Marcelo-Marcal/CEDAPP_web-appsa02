import axios from "axios";
import { useState } from "react";
import { api } from "../../serveles";
import { Container } from "./styles";
// import { mask } from "../../util/format";
// import { useForm } from "react-hook-form";
// import { api } from "../../serveles";

type PropsUser ={
  cpf: string,
  crm: string
}

export function Login() {

  const [valuePlaceHolder, setValuePlaceHolder] = useState(false);

  const [user, setUser] = useState<PropsUser>({
    cpf: "",
    crm: ""
  });

const handleInputCpf = (e: any) => {
    setUser({
      ...user,
      cpf: e.currentTarget.value,
    });
}
const handleInputCrm = (e: any) => {
  setUser({
    ...user,
    crm: e.currentTarget.value,
  });
}
// console.log({user})

const handleSubmit =  (event: any) => {
  event.preventDefault()
  axios.post(valuePlaceHolder ? "http://138.185.33.188:3333/session" : "http://vpn.hnsn.com.br:8283/session",{
    password: user.cpf,
    isMedico: user.crm,
    headers: {'Content-Type': 'application/json'}
  }).then(response=>{
    console.log(response.data);
  })
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

        <button  onClick={handleSubmit} name="ação" value="Entrar" >Entrar</button>

        <div className="line" ></div>
      </form>
      <footer>

      </footer>
    </Container>
  );
}

// export const Input = forwardRef()