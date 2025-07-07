import { Outlet, useLocation } from 'react-router-dom';
import User from '../getUser/User';
import AddUser from './AddUser';
import "./AddUserLayout.css";


const AddUserLayout=() =>{
  const location = useLocation();
  const isAdding = location.pathname.endsWith('/add');

  return (
     <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <User />

      {isAdding && (
        <div >
          <AddUser />
        </div>
      )}

    </div>
  );
}

export default AddUserLayout
