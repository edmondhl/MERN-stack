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
        <h1 className="headerAdd">Add New User</h1>
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label className="fieldName">Name</label>
            <input type="text" id="name" name="name"  />
          </div>
          <div className="inputGroup">
            <label className="fieldName">Email</label>
            <input type="text" id="email" name="email"  />
          </div>
          <div className="inputGroup">
            <label className="fieldName">Address</label>
            <input type="text" id="address" name="address" />
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