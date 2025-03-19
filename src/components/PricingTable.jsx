import React, { useState } from 'react';
import styled from 'styled-components';

const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px;
  flex-wrap: wrap;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  background: ${(props) => (props.active ? '#6200ea' : '#e0e0e0')};
  color: ${(props) => (props.active ? '#ffffff' : '#000000')};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => (props.active ? '#3700b3' : '#cccccc')};
  }
`;

const Card = styled.div`
  background: ${(props) => (props.highlight ? '#f0eaff' : '#ffffff')};
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: ${(props) => (props.highlight ? '2px solid #6200ea' : 'none')};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const PlanTitle = styled.h3`
  font-size: 22px;
  color: #333;
`;

const Price = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #6200ea;
  margin: 10px 0;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;

  li {
    padding: 8px;
    color: #555;
  }
`;

const Button = styled.button`
  background: #6200ea;
  color: #ffffff;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #3700b3;
  }
`;

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingData = {
    monthly: [
      {
        id: 1,
        title: 'Basic',
        price: '$19',
        features: ['1 Website', '10 GB Storage', 'Basic Support'],
        highlight: false,
      },
      {
        id: 2,
        title: 'Pro',
        price: '$49',
        features: ['5 Websites', '50 GB Storage', 'Priority Support'],
        highlight: true,
      },
      {
        id: 3,
        title: 'Premium',
        price: '$99',
        features: ['Unlimited Websites', '500 GB Storage', '24/7 Support'],
        highlight: false,
      },
    ],
    yearly: [
      {
        id: 1,
        title: 'Basic',
        price: '$199',
        features: ['1 Website', '10 GB Storage', 'Basic Support'],
        highlight: false,
      },
      {
        id: 2,
        title: 'Pro',
        price: '$499',
        features: ['5 Websites', '50 GB Storage', 'Priority Support'],
        highlight: true,
      },
      {
        id: 3,
        title: 'Premium',
        price: '$999',
        features: ['Unlimited Websites', '500 GB Storage', '24/7 Support'],
        highlight: false,
      },
    ],
  };

  return (
    <>
      <ToggleContainer>
        <ToggleButton
          active={billingCycle === 'monthly'}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </ToggleButton>
        <ToggleButton
          active={billingCycle === 'yearly'}
          onClick={() => setBillingCycle('yearly')}
        >
          Yearly (Save 20%)
        </ToggleButton>
      </ToggleContainer>

      <PricingContainer>
        {pricingData[billingCycle].map((plan) => (
          <Card key={plan.id} highlight={plan.highlight}>
            <PlanTitle>{plan.title}</PlanTitle>
            <Price>{plan.price}</Price>
            <Features>
              {plan.features.map((feature, index) => (
                <li key={index}>✅ {feature}</li>
              ))}
            </Features>
            <Button>Get Started</Button>
          </Card>
        ))}
      </PricingContainer>
    </>
  );
};

export default PricingTable;
