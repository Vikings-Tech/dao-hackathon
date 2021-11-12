import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { DAppProvider } from "@usedapp/core";
import OwnedTokens from 'Pages/OwnedTokens';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CreatedTokens from 'Pages/CreatedTokens';
import Explore from 'Pages/Explore';


function App() {
  return (
    <Router>
      <DAppProvider config={{}}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/ownedByMe" element={<OwnedTokens />} />
            <Route path="/createdByMe" element={<CreatedTokens />} />
            <Route path="/" element={<Explore />} />
            <Route path="/explore" element={<Explore />} />


          </Routes>

        </div>
      </DAppProvider>
    </Router>

  );
}

export default App;
