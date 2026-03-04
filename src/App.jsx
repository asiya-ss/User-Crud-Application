
import UserEdit from "./components/UserEdit";
import UserForm from "./components/UserForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserTable from "./components/UserTable";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/table" element={<UserTable />} />
        <Route path="/edit" element={<UserEdit />} />
      </Routes>
   
  );
}

export default App;