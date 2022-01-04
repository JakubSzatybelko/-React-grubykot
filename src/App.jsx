
import "bootswatch/dist/cyborg/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carusel/carusel";
import "./customstyle.css"
import MainPage from "./components/main/mainPage";
import Login from "./components/main/login";
import Register from "./components/main/register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = () =>{
  AOS.init({duration: 1000,once: true,});
    return(
        <Router>
        <div>
            
           

            
        <Switch>
        <Route path="/login">
        <Navbar stick={true} />
          <Login/>
          </Route>

          <Route path="/register">
          <Navbar stick={true}/>
          <Register/>
          </Route>

          <Route path="/">
          <Navbar stick={false}/>
          <Carousel/>
            <MainPage/>
          </Route>
        </Switch>

        </div>
    </Router>


        
      
        

    );
}

export default App;