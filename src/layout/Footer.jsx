import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Footer.css'
import {Cpu} from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className='bg-footer icon-background py-4 fs-5'>
        <Row>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className='list-unstyled'>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Join Us</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Our Services</h5>
            <ul className='list-unstyled'>
              <li>Consulting</li>
              <li>Development</li>
              <li>Marketing</li>
              <li>Support</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className='list-unstyled'>
              <li>Email: info@company.com</li>
              <li>Phone: +123 456 789</li>
              <li>Location: City, Country</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className='list-unstyled'>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </Col>
        </Row>
        <hr className='bg-light' />
        <Row>
          <Col className='text-center'>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
    </div>
  );
}

export default Footer;
