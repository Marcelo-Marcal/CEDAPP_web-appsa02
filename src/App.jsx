import Routes from "./routes";
import { GlobalStyles } from "./styles/global";
import AuthContext from "./auth";
// import { ContainerExam } from "./pages/dashboard";

// import "./App.css";

export function App() {
  return (
    <AuthContext.Provider login={false}>      
      <GlobalStyles />
      <Routes />
    </AuthContext.Provider>
  );
}
