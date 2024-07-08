import React from 'react';
import Header from './../components/header/Header';
import MySwiperComponent from '../components/MySwiperComponent';
import Footer from './../components/Footer/Footer';
import table from '../assets/images/Table.png';

function PageHome() {
  return (
    <>
      <div >
        <div >      
          <Header class="nav"/>
        </div>
        <div style={{ margin:"170px",
              top: "25%", 
              left: "10%", 
              color: "white",
              zIndex: 10,
              textAlign: "left",  
            
          }}>
            <h1 style={{
              fontSize: "80px", 
              marginBottom: "0px" 
            }}>SEABLE <br /> SOUSSE</h1>
            <h1 style={{
              fontSize: "35px", 
              marginTop: "10px" 
            }}>13 - 19 MAY 2024</h1>
        
        <button style={{
fontSize: "25px", 
backgroundColor: "rgba(255, 51, 204, 1)", 
color: "white", 
padding: "10px 20px", 
border: "none",
borderRadius: "50px", 
cursor: "pointer", 
margin: "10px"            }}>Watch Live</button>    
        <button style={{
fontSize: "25px", 
backgroundColor: "rgba(255, 51, 204, 1)", 
color: "white", 
padding: "10px 20px", 
border: "none",
borderRadius: "50px", 
cursor: "pointer", 
margin: "10px"            }}>Where To watch</button>    
        </div> 
      </div>
      <MySwiperComponent />
      <img src={table} style={{width:"1850px"}}></img>
      <Footer/></>

  );
}
export default PageHome;
