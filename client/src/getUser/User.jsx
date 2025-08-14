import { useEffect, useState } from 'react'
import './User.css'
import axios from 'axios';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const User = () => {
    const [users, setUsers] = useState([]);
    const navigate= useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const response = await axios.get("https://mern-stack-ch7v.onrender.com/api/users");
                setUsers(response.data);

            } catch (error){
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

const deleteUser = async(userId) =>{
    await axios.delete(`https://mern-stack-ch7v.onrender.com/api/delete/user/${userId}`)
    .then((response) =>{
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message,{position: "top-right"})
    })
    .catch((error) =>{console.error("Error deleting user", error)});
}

  return (
      <div className="userTable">
          <button onClick={()=>navigate('/add')} type="button" className="btn btn-primary">
              Add User <i className="fa-solid fa-user-plus"></i>
          </button>

            {users.length === 0 ? (
                <div className="noData">
                    <h2>No Users To Display</h2>
                    <p>Please add new Users</p>
                    <p>This will 30s to start up.</p>
                </div>
            ) : 
            <table className= "table table-bordered">
            <thead>
                <tr>
                    <th scope = "col">Num</th>
                    <th scope = "col">Name</th>
                    <th scope = "col">Email</th>
                    <th scope = "col">Address</th>
                    <th scope = "col">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {users.map((user, index) => {
                      return (
                          <tr key ={user.id}>
                              <td>{index+1}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.address}</td>
                              <td className="actionButtons">
                                  <button onClick={()=>navigate('/update/'+user._id)} type="button" className="btn btn-info">
                                      <i className="fa-regular fa-pen-to-square"></i>
                                  </button>
                                  <button onClick={()=> deleteUser(user._id)} type="button" className="btn btn-danger">
                                      <i className="fa-solid fa-trash"></i>
                                  </button>
                              </td>
                          </tr>
                      )
                  }
                  )}
              </tbody>
          </table>
          }

    </div>
  )
}

export default User