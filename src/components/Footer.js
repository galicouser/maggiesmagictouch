import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  padding: 20px;
  color: #fff;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin: 10px 0;
  
  a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterText = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <a href="#facebook" target="_blank" rel="noreferrer">Facebook</a>
        <a href="#instagram" target="_blank" rel="noreferrer">Instagram</a>
        <a href="#linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
      </FooterLinks>
      <FooterText>&copy; 2024 Maggie's Magic Touch. All rights reserved.</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
