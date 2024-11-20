import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Assaign from "./Component/TodayLogin/Login";
import Home from "./Component/Home/Home";



function App() {
  return (
    <div>
   
     <Router>
     <Assaign />
      <Routes>
        <Route path="/home" element = {<Home/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
