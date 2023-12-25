import React from 'react';
import "./Footer.css"
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg text-light py-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Company Name</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in tellus id libero ultricies
              eleifend at ac lectus.
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/product1">Product 1</a>
              </li>
              <li>
                <a href="/product2">Product 2</a>
              </li>
              <li>
                <a href="/product3">Product 3</a>
              </li>
              <li>
                <a href="/product4">Product 4</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>
              123 Main Street, Cityville, State 12345
              <br />
              Email: info@example.com
              <br />
              Phone: +1 234 567 890
            </p>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3">
        <p>&copy; 2023 SAAS -Layout. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
