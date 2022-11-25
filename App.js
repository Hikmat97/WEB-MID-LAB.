import { Route, Routes } from "react-router-dom";
import First from "./First";
import Props from "./Props";
import Routing from "./Routing";

function App() {
  return (
   <div>


<Routes>
  <Route path="/" element={<First/>}/>
  <Route path="/Routing" element={<Routing/>}/>
  
</Routes>


   </div>
  );
}

export default App;
