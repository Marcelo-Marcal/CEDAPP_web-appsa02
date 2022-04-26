import { Form } from "./components/Form";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      {/* <Header /> */}
      <Form />
      <GlobalStyles />
    </>
  )
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