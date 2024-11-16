import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const About = () => {
  const [firstName,setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] =useState('');

 /* const firstNameHandle =(e)=>{
 setFirstName(e.target.value)
  }
  const lastNameHandle =(e)=>{
    setLastName(e.target.value)
     }
     const emailHandle =(e)=>{
      setEmail(e.target.value)
       }
       const passwordHandle =(e)=>{
        setPassword(e.target.value)
         }*/
const handleData = (e,name)=>{
if(name ==='firstName'){
  setFirstName(e.target.value)
}else if(name ==='lastName'){
  setLastName(e.target.value)
}else if(name === 'email'){
  setEmail(e.target.value)
}else if(name === 'password'){
  setPassword(e.target.value)
}
}
    
const submithandle =(e)=>{
e.preventDefault();
let userobj = {
  firstName : firstName,
  lastName :lastName,
  email:email,
  password:password
}
console.log(userobj);
setFirstName('');
setLastName('');
setEmail('');
setPassword('');
}


return(
  <section>
  <Form onSubmit={submithandle}>
   <Form.Group>
     <FormControl type='text'  value={firstName} placeholder='enterYourFirstName' onChange={(e)=> handleData(e,'firstName')}></FormControl>
   </Form.Group>
   <Form.Group>
     <FormControl type='text' name='lastName 'value={lastName} placeholder='enterYourLastName'onChange={(e)=> handleData(e,'lastName')}></FormControl>
   </Form.Group>
   <Form.Group>
     <FormControl type='email' name='email' value={email} placeholder='enterYour email'onChange={(e)=> handleData(e,'email')}></FormControl>
   </Form.Group>
   <Form.Group>
     <FormControl type='password' name='password' value={password} placeholder='enterYour Password'onChange={(e)=> handleData(e,'password')}></FormControl>
   </Form.Group>
   <Button type='submit'>Submit</Button>
  </Form>
  </section>


)
}

export default About