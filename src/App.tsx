import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/Header";
import SideBar from "./components/SideBar";
import { AppProvider } from "./components/context/AppContext";
import Main from "./components/main/Main";

function App() {
  return (
    <AppProvider>
      <>
        <Header />
        <SideBar />
        <Main />
      </>
    </AppProvider>
  );
}

export default App;
