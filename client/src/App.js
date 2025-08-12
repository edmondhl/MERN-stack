
import AddUser from './addUser/AddUser';
import './App.css';
//import User from './getUser/User';
import AddUserLayout from './addUser/AddUserLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Update from './updateUser/Update';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddUserLayout />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
