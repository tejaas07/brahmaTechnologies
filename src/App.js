import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import About from "./Components/About Us/AboutUs";
import Contact from "./Components/Contact Us/ContactUs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <Home />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
