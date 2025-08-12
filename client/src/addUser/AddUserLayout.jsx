import { Outlet, useLocation } from 'react-router-dom';
import User from '../getUser/User';
import "./AddUserLayout.css";


const AddUserLayout=() =>{

  return (
     <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <User />
    </div>
  );
}

export default AddUserLayout
