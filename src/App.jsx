import { ToastContainer } from "react-toastify";
import Router from "./routing/Router";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router />
    </>
  );
}

export default App;
