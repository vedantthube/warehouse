import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { Image } from 'react-bootstrap';
import exploreimg from '../img/warehouseimg.png'
//import warehouse from "../data.json"
import WarehouseCard from './WarehouseCard';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
function Explore() {
    const [warehouse,setWarehouse]=useState([])
    useEffect(()=>{
        axios.get('https://mocki.io/v1/8fc12d87-bb44-4617-bd03-67d81c6230ae')
          .then(response => {
            const data=[response.data];
            setWarehouse(data[0].goodowns);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          })
        })
    
  return (
    <>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home"><h3>Warehouse Management</h3></Navbar.Brand>
            <Nav className="me-right">
            <Nav.Link href="#metrics" className='metrics'><h4>Metrics</h4></Nav.Link>
            <Nav.Link href="#admin" className='admin'><h4>AdminPanel</h4></Nav.Link>
            <Nav.Link href="#search"><button className='button-nav'><i className="fa fa-search" style={{fontSize:24}}></i></button></Nav.Link>
            <Nav.Link href="#check"><button className='button-nav'><i className="fa  fa-check-circle-o" style={{fontSize:24}}></i></button></Nav.Link>
            <Nav.Link href="#message"><button className='button-nav'><FontAwesomeIcon icon={faMessage} style={{fontSize:24}} /></button></Nav.Link>
            <Nav.Link href="#message"><button className='button-profile'><i className="fa fa-user" style={{fontSize:24}}></i></button></Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    <div className='main-page'>
        <main>
        <Image src={exploreimg} className='exploreimg' />
        <h1 className='warehouse-h1'>Welcome to the WareHouse Management</h1>
        <h3 className='warehouse-tag'>Get started by selecting a warehouse below or create a new one.</h3>
        <button className='btn btn-primary'>Create a new WareHouse</button>
    </main>
    <div className="container" key={warehouse.userId}>
      <div className="row">
      {warehouse.map((data) => (
        <div className="col-md-4">
             <WarehouseCard warehouse={data} />
        </div>
      ))}
      </div>
    </div>
    </div>
    </>
  )
}
export default Explore
