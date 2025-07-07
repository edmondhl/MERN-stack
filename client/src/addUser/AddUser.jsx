import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./AddUser.css"
import User from '../getUser/User';

const AddUser = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        navigate('/');
    };

    return (
  <div className="addUserContainer">
    <User />

    <div className="addUserOverlay">
      <div className="addUserFormContainer">
        <h1>Add New User</h1>
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Full Name" />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>
          <div className="inputGroup">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" placeholder="Address" />
          </div>
          <div className="inputGroup">
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