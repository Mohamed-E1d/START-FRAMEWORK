import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className='porf'>
        <h1 className='fw-bold'>CONTACT SECTION</h1>
        <div className='d-flex align-items-center justify-content-center my-3'>
          <div className="line"></div>
          <i className="fa-solid fa-star star"></i>
          <div className="line"></div>
        </div>
      </section>

      <div className="d-flex justify-content-center py-5">
        <Form className=' py-5 px-4 rounded-4 w-100' style={{ maxWidth: '1000px' }}>
          <Form.Group className="mb-4" controlId="formBasictext">
            <Form.Control type="text" placeholder="userName" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasictext">
            <Form.Control type="text" placeholder="userAge" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="userEmail" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="userPassword" />
          </Form.Group>

          <div className="text-start">
            <Button variant="success" type="submit">
              Send Message
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
