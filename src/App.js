// import logo from './logo.svg';
import './App.css';
import Navbar from "./Nav";
import UBRoutes from './routes'
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "reactstrap";


function checkLogin(){
    let token = Cookies.get('token');
    if (token == null){
        return null;
    }
    // in future test token
    return "Already Logged In";
}

const basePath = "http://127.0.0.1:5000"


/*
<Container>
            <Row>
                <Col>
                    <UBRoutes checkLogin={checkLogin} basePath={basePath}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Navbar checkLogin={checkLogin}/>
                </Col>
            </Row>
        </Container>
 */
function App() {
  return (
    <div className="App">
        <UBRoutes checkLogin={checkLogin} basePath={basePath}/>
        <Navbar checkLogin={checkLogin}/>
    </div>
  );
}

export default App;
