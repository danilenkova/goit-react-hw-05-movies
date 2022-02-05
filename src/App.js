import AppBar from "./components/AppBar";
import Main from "./components/Main/Main";
import Container from "./components/Container";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Container>
      <AppBar />
      <Main />
      <ToastContainer />
    </Container>
  );
};

export default App;
