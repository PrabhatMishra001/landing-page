import styled from 'styled-components';
import webdevImage from '../assets/webdev.jpeg';
import uiuxImage from '../assets/OIP.jpeg';
import appdevImage from '../assets/app.jpeg';
const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 240px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ServiceCards = () => {
  return (
    <CardContainer>
      <Card>
        <CardImage src={webdevImage} alt="Service 1" />
        <h3>Web Development</h3>
        <p>We build responsive and fast web applications.</p>
      </Card>
      <Card>
        <CardImage src={uiuxImage} alt="Service 2" />
        <h3>UI/UX Design</h3>
        <p>Designs focused on user experience.</p>
      </Card>
      <Card>
      <CardImage src={appdevImage} alt="Service 3" />
        <h3>Mobile Apps</h3>
        <p>Build interactive mobile applications.</p>
      </Card>
    </CardContainer>
  );
};

export default ServiceCards;
