import './footer.scss';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { Col, Row } from 'reactstrap';

const Footer = () => (
  <div className="social-container">
    <h3>Redes Sociais</h3>
    <a href="https://www.example.com" className="youtube social">
      <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
    <a href="https://www.example.com" className="facebook social">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a href="https://www.example.com" className="twitter social">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a href="https://www.example.com" className="instagram social">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
  </div>
);

export default Footer;
