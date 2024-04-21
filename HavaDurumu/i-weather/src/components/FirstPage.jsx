
import React from "react";
import logo from '../images/Logo2.png';
import '../styles/FirstPage.css';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';

function FirstPage() {
    return (
      <div className="body">
        <div className="header">
            <div className="logo">
              <img src={logo} alt="weather logo" />
            </div>
            <div className="title">
              <p>iWeather</p>
            </div>
        </div>
       <Container style={{marginTop:"20%"}} className="container2">
            <Row  className="row2" style={{display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center"}}>
                <Col className="col2" >
                    <p className="welcomeH">
                        Welcome to  <p style={{color:"#8fb2f5",paddingLeft:"0.5rem"}}> TypeWeather!</p>
                    </p>
                    <p className="welcomeC">
                        Choose a location to see the weather forecast.
                    </p>
                </Col>
            </Row>
       </Container>
       <Search>

       </Search>
      </div>
    );
  }
  
  export default FirstPage;