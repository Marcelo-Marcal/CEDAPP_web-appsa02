import axios from "axios";
import { createContext, useState } from "react";

type AuthContextType ={
  data: any;
  signIn: (user: FuncitonSinInData) => Promise<void>;
}

type SinInData ={
  user: string;
  password: string;
  isDoctor: string
}
type FuncitonSinInData ={
  crm: string;
  cpf: string;
  isDoctor: boolean;
}

export const AuthContext = createContext({} as AuthContextType)




export function AuthProvider({ children }: any) {
  const [data, setData] = useState<SinInData | null>(null);

  async function signIn(user: FuncitonSinInData){
    axios.post("http://vpn.hnsn.com.br:8283/session",{
      login: user.crm,
      password: user.cpf,
      isMedico: user.isDoctor,
    }).then(response=>{
      setData(response.data);
    }).catch(response=>{
      if(response.status === 200){
        alert("ok")
      }else{
        axios.post("http://138.185.33.188:3333/session",{
          login: user.crm,
          password: user.cpf,
          isMedico: user.isDoctor,
        }).then(response=>{
          setData(response.data);
        })
      }
    })
  }
  

  return(
    <AuthContext.Provider value={{data, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}