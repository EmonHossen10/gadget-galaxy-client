import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  // console.log(location.pathname)
  const noHeaderFooter = location.pathname.includes("login");
  const noHeaderFooterS = location.pathname.includes("sign-up");

  return (
    <>
      {noHeaderFooter || noHeaderFooterS || <Header></Header>}
      <main>
        <Outlet></Outlet>
      </main>
      {noHeaderFooter || noHeaderFooterS || <Footer></Footer>}
    </>
  );
}

export default App;
