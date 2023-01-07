
import './App.css';
import Signup from './Component/Signup/Signup';
import Signin from './Component/Signin/Signin';
import {BrowserRouter,Routes,Route}  from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
   
    
    </div>
  );
}

export default App;
