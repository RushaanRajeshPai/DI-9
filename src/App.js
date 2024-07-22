import Finance from "./Components/Finance/Finance";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Serv from "./Components/Serv/Serv";
import Team from "./Components/Team/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Team />
      <Serv />
      <Finance />
      <Footer />
    </div>
  );
}

export default App;
