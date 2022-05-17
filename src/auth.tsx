import axios from "axios";
import { createContext, useState } from "react";

type AuthContextType ={
  isAthenticated: boolean,
  data: Data | null;
  signIn: (user: SinIn) => Promise<void>;
}

type SinIn ={
  crm: string;
  cpf: string;
  isDoctor: boolean;
}

type Data ={
  token: string,
  user:{
    cpf: string,
    crm: string,
    dtNascimento: string,
    nome: string
  }
}

export const AuthContext = createContext({} as AuthContextType)


export function AuthProvider({ children }: any) {
  const [data, setData] = useState<Data | null>(null);
  let isAthenticated = false;
 
  async function signIn(user: SinIn){
    axios.post("http://vpn.hnsn.com.br:8283/session",{
      login: user.crm,
      password: user.cpf,
      isMedico: user.isDoctor,
    }).then( response=>{
      const dataTotal =  response.data;
      setData(dataTotal);
    });
  }  
 
  return(
    <AuthContext.Provider value={{ data, signIn, isAthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}