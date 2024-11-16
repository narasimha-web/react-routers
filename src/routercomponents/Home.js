import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const navigate = useNavigate();
    const navigateLoginPage = ()=>{
        navigate('/Sucess')
    };
  
   
  return (
<section>
<div className='firstdiv'>
<div className='title'>
  <h1 className='titletext'>Wellcome <br></br>To Movies Add..</h1>

</div>
<div className='Buttons'>
<Button className='onebtn' onClick={navigateLoginPage}><strong>Log In</strong></Button>
</div>
 

</div>
</section>
  )
}

export default Home