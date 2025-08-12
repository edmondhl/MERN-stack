import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./AddUser.css"
import User from '../getUser/User';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddUser = () => {
    const users ={
      name:"",
      email:"",
      address:"",
    };
    const [user, setUser] = useState(users);

    const handleInput = (e) => {
      const {name , value} = e.target;
      
      setUser({...user, [name]: value});
    }

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post("https://mern-stack-ch7v.onrender.com/api/user", user)
          .then((response) =>{
            toast.success(response.data.message, {position: "top-right"})
          })
          .catch((error) =>{console.error("Error submitting form", error)});
        navigate('/');
    };

    return (
  <div className="addUserContainer">
    <User />

    <div className="addUserOverlay">
      <div className="addUserFormContainer">
        <h1 className="headerAdd">Add New User</h1>
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label className="fieldName">Name</label>
            <input 
            type="text" 
            id="name" 
            name="name"
            onChange={handleInput}
              />
          </div>
          <div className="inputGroup">
            <label className="fieldName">Email</label>
            <input 
            type="text" 
            id="email" 
            name="email"
            onChange={handleInput}
              />
          </div>
          <div className="inputGroup">
            <label className="fieldName">Address</label>
            <input 
            type="text" 
            id="address" 
            name="address"
            onChange={handleInput} 
              />
          </div>
          <div className="buttonGroup">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

}

export default AddUser