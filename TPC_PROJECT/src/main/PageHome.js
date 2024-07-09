import React from 'react';
import Header from './../components/header/Header';
import MySwiperComponent from '../components/MySwiperComponent';
import Footer from './../components/Footer/Footer';
import table from '../assets/images/Table.png';
import bg from '../assets/images/bg.jpg';
import './css.css'; // Make sure to import your CSS file

function PageHome() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '1000px',
        width: '100%',
      }}>
        <Header />
        <div className='cont' style={{
          paddingTop: '250px',
          paddingLeft:"200px",
          color: "white",
          textAlign: "left",
          fontSize: "150px"
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <span style={{ fontWeight: "bold", letterSpacing: '10px' }}>SEABLE</span>
            <span style={{ fontSize: "120px", letterSpacing: '22px' }}>SOUSSE</span>
          </div>
          <h1 style={{
            letterSpacing: "2px",
            fontSize: "50px",
            marginBottom: "-100px", // Reduce bottom margin to bring buttons closer
            color: "rgba(254, 226, 247, 1)"
          }}>
            13 - 19 MAY 2024
          </h1>

          <button className="button">
            WATCH LIVE
          </button>
          <button className="button" style={{ marginLeft: "10px" }}>
            WHERE TO WATCH
          </button>
        </div>
      </div>
      <MySwiperComponent />
      <img src={table} style={{ width: "1850px" }} alt="Table"></img>
      <Footer />
    </>
  );
}

export default PageHome;
