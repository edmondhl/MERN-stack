
import AddUser from './addUser/AddUser';
import './App.css';
import User from './getUser/User';
import AddUserLayout from './addUser/AddUserLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddUserLayout />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
