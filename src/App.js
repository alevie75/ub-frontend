// import logo from './logo.svg';
import './App.css';
import Navbar from "./Nav";
import UBRoutes from './routes'
import Cookies from "js-cookie";


function checkLogin(){
    let token = Cookies.get('token');
    if (token == null){
        return null;
    }
    // in future test token
    return "Already Logged In";
}

const basePath = "http://127.0.0.1:5000"

function App() {
  return (
    <div className="App">
        <Navbar checkLogin={checkLogin}/>
        <UBRoutes checkLogin={checkLogin} basePath={basePath}/>
    </div>
  );
}

export default App;
