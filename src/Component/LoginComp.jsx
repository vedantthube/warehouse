import React from 'react'
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import warehouselogin from '../img/warehouselogin.jpg'

function LoginComp() {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
    <Container >
        <Navbar.Brand href="#home"><h2 style={{fontWeight:'bold'}} className='loginname'>Warehouse</h2></Navbar.Brand>
    </Container>
    </Navbar>
    <div className='main-page1'>
    <main>
    <Image src={warehouselogin} className='loginimage'/>
    </main>
    <div className="centered-div">
        <div className="content">
            <h1>Welcome Back</h1>
            <form action="#" method="post">
            <div className="form-group">
                <input type="text" id='username' name='username' placeholder='Enter username' required />
            </div>
            <div className="form-group">
                
                <input type="password" id="password" name="password" placeholder="Enter your password" required/>
            </div>
            <div>
              <p style={{float:'left'}}>Forgot password</p>
            </div>
            <div className="form-group">
                <button type="submit" style={{fontWeight:'bolder'}}><h5>Login</h5></button>
            </div>
            

        </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default LoginComp
