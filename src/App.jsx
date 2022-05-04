import { LoginForm } from "./components/Form";
import { Header } from "./components/Header";
import { Container } from "./pages/dashboard";
import { GlobalStyles } from "./styles/global";

// import "./App.css";

export function App() {
  return (
    <>
      <div className="content">
        <Header />
        <LoginForm />
      </div>
        <Container />
      
      <GlobalStyles />

    </>
  );
}


// import Modal from "react-modal";
// import { Dashboard } from "./components/Dashboard";
// import { Header } from "./components/Header";
// import { NewTransactionModal } from "./components/NewTransactionModal";
// import { TransactionsProvider } from "./TransactionsContext";

// import { GlobalStyle } from "./styles/global";

// Modal.setAppElement('#root');

// export function App() {  
//   const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  
//   function handleOpenNewTransactionModal() {
//     setIsNewTransactionModalOpen(true);
//   }
//   function handleCloseNewTransactionModal() {
//     setIsNewTransactionModalOpen(false);
//   }
//   return (
//     <TransactionsProvider>
//       <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

//       <Dashboard />

//       <NewTransactionModal
//         isOpen={isNewTransactionModalOpen}
//         onRequestClose={handleCloseNewTransactionModal}
//       />
      
//       <GlobalStyle />
//       </TransactionsProvider>
//   );
// }