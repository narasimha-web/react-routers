import React from 'react';
import { useParams } from 'react-router-dom';
import UserData from './UserData';

const UserDetailes = () => {
 const data = useParams()
 console.log(data)

const userDetailes = UserData.find(each => each.id === parseInt(data.userId))
return (
  <div>
    <h1>{userDetailes.name}</h1>
    
    
    </div>
)

}


export default UserDetailes