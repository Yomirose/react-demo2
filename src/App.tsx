import Table from "./Components/Table";
import { Routes, Route } from "react-router-dom";
//  import UserPage from "./Components/userPage"
import UserPage from "./Components/UserPage"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Table />}/>
        <Route path="userpage/:id" element={ <UserPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
