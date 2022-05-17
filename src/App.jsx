import Routes from "./routes";
import { GlobalStyles } from "./styles/global";
import {AuthProvider} from "./auth";
// import { ContainerExam } from "./pages/dashboard";

// import "./App.css";

export function App() {
  return (
    <AuthProvider>      
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
}
