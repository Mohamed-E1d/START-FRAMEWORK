import React from 'react'
import Container from 'react-bootstrap/Container';
import'./Footer.css';

export default function Footer() {
  return (
    <>

<footer className='text-white site-footer'>
  <Container fluid className='py-5'>
    <div className='footer-container' >
<div  className="footer-section">
  <h3>LOCATION</h3>
  <p>2215 John Daniel Drive</p>
  <p>Clark, MO 65243</p>
</div>
<div  className="footer-section">
  <h2 className='py-1'>AROUND THE WEB</h2>
  <div className="icons">
  <i className="fa-brands fa-facebook mx-1 icon"></i>
  <i className="fa-brands fa-twitter mx-1 icon"></i>
  <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
  <i className="fa-solid fa-globe mx-1 icon"></i>
  </div>
</div>
<div  className="footer-section">
  <h2>ABOUT FREELANCER</h2>
  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
</div>

</div>
  </Container>

<div className="copyright text-center">
  <p >Copyright © Your Website 2021</p>
</div>
</footer>
    </>
  )
}
