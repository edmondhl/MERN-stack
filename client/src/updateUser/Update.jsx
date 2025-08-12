import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./Update.css"
import User from '../getUser/User';
import axios from 'axios';
import toast from 'react-hot-toast';

const Update = () => {
    const users ={
      name:"",
      email:"",
      address:"",
    };
    const [user, setUser] = useState(users);
    const navigate = useNavigate();
    const {id} = useParams();
    
    
    const handleInput = (e) => {
      const {name , value} = e.target;
      
      setUser({...user, [name]: value});
    }

    useEffect(() => {
        axios.get(`https://mern-stack-ch7v.onrender.com/api/user/${id}`)
          .then((response) => {
            setUser(response.data); 
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            }
    )}, [id]);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`https://mern-stack-ch7v.onrender.com/api/update/user/${id}`, user)
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
        <h1 className="headerAdd">Update User</h1>
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label className="fieldName">Name</label>
            <input 
            type="text" 
            id="name" 
            value={user.name}
            name="name"
            onChange={handleInput}
              />
          </div>
          <div className="inputGroup">
            <label className="fieldName">Email</label>
            <input 
            type="text" 
            id="email" 
            value={user.email}
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
            value={user.address}
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

export default Update