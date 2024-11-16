import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const [firstName,setFirstName]= useState('')
    const navigateLogin = useNavigate();
    const navigateLoginPage = () =>{
        navigateLogin('/Sucess')
    }
  return (
    <section className='totalBody'>
         <div className='signupBlock'>  
            <div ><h2 className='signupText'>Signup Page</h2></div> 
    <Form className='signupFormdimensions'>
      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="Enter Your FirstName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="Enter Your LastName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasinumber">
        <Form.Label>Email MobileNumber</Form.Label>
        <Form.Control type="number" placeholder="Enter mobileNumber" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={navigateLoginPage} className='loginbtn'>
        Submit
      </Button>
    </Form>
      </div>
    </section>
  )
}

export default Signup