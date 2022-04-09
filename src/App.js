import "./App.scss";
import BackToTop from "./components/BackToTop";

// components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// routes
import Routes from './routes';

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="app__container">
        <Routes />
      </div>

      <Footer />
      
      <BackToTop />
    </div>
  );
}

export default App;
