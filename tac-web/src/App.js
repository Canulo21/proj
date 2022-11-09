// import logo from "./logo.svg";
import "./components/assets/js/script.js";
import "./nav-header.css";
import "./components/assets/css/style.css";
import "./components/assets/css/footer.css";
import Footer from "./components/Footer";
import Pubnav from "./components/Pubnav";
import Revslider from "./components/Revslider.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pubnav></Pubnav>
      </header>
      <div id="revslider-wrap">
        <Revslider></Revslider>
      </div>
      <div id="content"></div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
