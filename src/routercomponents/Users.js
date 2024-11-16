import React from 'react';
import UserData from './UserData';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

const Users = () => {
  return (
    <div>
        <h1>Users</h1>
       <Row>
       {UserData.map((eachUser)=>{
            const {id,name,email,username} = eachUser;
            return(
                    <div class="col-3">
                 <Link to ={`/Users/${id}`}>
              <article className='card'>
                <h3>{name}</h3>
                <h4>{email}</h4>
                <h4>{username}</h4>
             </article>
             </Link>
         
            </div>
            
            )
        })}
       </Row>
     </div>
  )
};

export default Users;