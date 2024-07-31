import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  const noHeaderFooter = location.pathname.includes("login");

  return (
    <>
      {noHeaderFooter || <Header></Header>}
      <main>
        <Outlet></Outlet>
      </main>
      {noHeaderFooter || <Footer></Footer>}
    </>
  );
}

export default App;
