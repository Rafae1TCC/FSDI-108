import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import About from "./components/About/About";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-content">
        <Home></Home>
        <Catalog></Catalog>
        <About></About>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
