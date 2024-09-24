import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
// Import the image from the assets directory
import maggieslogo from '../assets/maggieslogo.jpg';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  text-align: center;
 
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20%;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <h2>Welcome to Maggie's Magic Touch</h2>
      <p>Top-notch cleaning services for your home and office!</p>
      {/* Use the imported image here */}
      <Logo src={maggieslogo} alt='Logo' />

      <CardsContainer>
        <Card title="Residential Cleaning" description="We make your home sparkle with our professional residential cleaning services." buttonText="Learn More" />
        <Card title="Commercial Cleaning" description="Keeping your office spotless, so you can focus on what matters most." buttonText="Learn More" />
        <Card title="Deep Cleaning" description="Our deep cleaning services reach every corner of your home or business." buttonText="Learn More" />
      </CardsContainer>
    </HomeWrapper>
  );
};

export default Home;
