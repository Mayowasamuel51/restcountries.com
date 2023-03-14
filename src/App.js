import AllCountries from "./components/AllCountries";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Africa from "./components/countries/Africa";
import Europe from "./components/countries/Europe";
import Search from "./components/countries/Search";
import NavbarPopulation from "./components/populations/NavbarPopulation.";
import Population500 from "./components/populations/Population500";
import Currency from "./components/countries/Currency";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/africa" excat element={<Africa />} />
          <Route path="/Europe" excat element={<Europe />} />
          <Route path="/" excat element={<AllCountries />} />
          <Route path="/search" excat element={<Search />} />
          <Route path="/population" excat element={<NavbarPopulation />} />
          <Route path="/currency" excat element={<Currency />} />
          <Route path="/population/below500" excat element={<Population500 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
