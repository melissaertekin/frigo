import { BrowserRouter as Router,Route,  Switch } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Footer from "./components/footer/footer";
import { home } from "./pages/home/home";
import { market } from "./pages/market/market";
import { browser } from "./pages/recipeBrowse/browse";
import { details } from "./pages/recipeBrowse/recipeDetail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/market' component={market} />
          <Route exact path='/browse' component={browser} />
          <Route exact path='/details' component={details} />
         
        </Switch>
        <Footer />
      </Router>
    </>
   
  );
}

export default App;
