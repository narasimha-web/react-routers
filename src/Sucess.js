import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';

const Sucess = () => {   
  const [firstName,setfirstName]=useState('');
  const[LastName,setlastName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPasword]=useState('');

  const dataHandle =(e)=>{
  e.preventDefault();
  const formData ={
    firstName :firstName,
    LastName:LastName,
    email:email,
    password:password
  }
  console.log(formData)
  navigte('/Movies')
  }

  const navigte = useNavigate()
  return (
  <section className='loginBody'>
   
   <div className='blcdimension'>   
    <Form className='formdimensions' onSubmit={dataHandle}>
      <Form.Group className="mb-3" >
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" name='firstName'value={firstName} placeholder="Enter Your FirstName" onChange={(e)=>setfirstName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text"  name='lastName' value={LastName} placeholder="Enter Your LastName"onChange={(e)=>setlastName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email'value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"name='password' value={password} placeholder="Password"onChange={(e)=>setPasword(e.target.value)} />
      </Form.Group>
      <Button
       variant="primary"
        type="submit"
         className='loginbtn'

         >
        Submit
      </Button>
      <p className='signuptext'>You Do'nt Have An Account..? <a href='/Signup'><strong className='linktext'>signUp</strong></a></p>
    </Form>
      </div>

  </section>

  )
}

export default Sucess