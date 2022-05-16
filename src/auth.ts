import { createContext } from "react";


//Quando você receber respostas da api, salve-as em um contesto e depois libere esse contesto pra toda sua app

const AuthContext = createContext({ login: true });

export default AuthContext;