import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Login } from './pages';

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Router>
        <Routes>    
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
