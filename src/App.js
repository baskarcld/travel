import "./App.css";
import About from "./Component/About/About";
import Card from "./Component/Card/Card";
import Client from "./Component/Client/client";
import Faq from "./Component/Faq/Faq";
import Footer from "./Component/Footer/Footer";
import Freedom from "./Component/Freedom/Freedom";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Planet from "./Component/Planet/Planet";
import Safe from "./Component/Safe/Safe";
import Table from "./Component/Table/Table";
import Toke from "./Component/Tokenomic/Toke";
import Work from "./Component/Work/Work";

function App ()
{
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Client />
      <Card />
      <About />
      <Planet />
      <Work />
      <Safe />
      <Toke />
      <Freedom />
      <Table />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
