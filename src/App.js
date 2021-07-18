import "./App.css";
import { Route, Switch } from 'react-router-dom';
import Header from "./components/header";
import LandingPage from "./content/LandingPage/landingPage";


function App() {
  return (
    <div className="w-screen mt-16 bg-background-color">
      <Header />
  
      <Switch>
<Route exact path="/" component={LandingPage}/>

      </Switch>
    </div>
  );
}

export default App;
