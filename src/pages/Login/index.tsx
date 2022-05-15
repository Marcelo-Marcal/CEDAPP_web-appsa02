import { useState } from "react";
import { Container } from "./styles";
import { mask } from "../../util/format";
import { useForm } from "react-hook-form";
import { api } from "../../serveles";


export function Login() {

  const [valuePlaceHolder, setValuePlaceHolder] = useState(false);

  const [cpf, setCpf] = useState('')

  // const { register, handleSubmit, errors } = useForm()
  // function onSubmit(data) {
  //   console.log('Data submitted: ', data)
  // }

  const [valor, setValor] = useState('')

  function handleChangeMask(event: any) {
    const { value } = event.target

    setValor(mask(value))
}

const handleInput = (e: any) => setCpf( e.target.value )
const handleSubmit = (event: any) => {
  event.preventDefault()
  const response = api.post("/session", {
    
    password: valuePlaceHolder ? cpf: " ",
    isMedico: valuePlaceHolder,
  
  });
  console.log(response)
}

  return (
    <Container>
     <form onSubmit={handleSubmit}>
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
            name="Login"
            placeholder={valuePlaceHolder? "CRM": "CPF"}
            onChange={handleChangeMask}
            value={valor}
            // ref={register()}
          />
        </div>
        <div className="pw">
          <label htmlFor="input"></label>
          <input
            type="text"
            name="Senha"
            placeholder={valuePlaceHolder? "CPF": "Data de nascimento"}
            onChange={handleInput}
            // ref={register()}
          />{" "}
        </div>

        <input type="submit" name="ação" value="Entrar" />

        <div className="line" ></div>
      </form>
      <footer>

      </footer>
    </Container>
  );
}

// export const Input = forwardRef()