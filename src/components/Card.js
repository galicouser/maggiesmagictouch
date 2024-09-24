import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
  text-align: center;
  margin: 20px;
`;

const CardTitle = styled.h3`
  color: #333;
  font-size: 24px;
`;

const CardDescription = styled.p`
  color: #555;
  font-size: 16px;
  margin-top: 10px;
`;

const CardButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 15px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Card = ({ title, description, buttonText }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton>{buttonText}</CardButton>
    </CardWrapper>
  );
};

export default Card;
