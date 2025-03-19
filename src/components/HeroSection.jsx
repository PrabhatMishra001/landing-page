import styled from 'styled-components';
import webvideo from '../assets/webd.mp4';
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <BackgroundVideo autoPlay loop muted>
        <source src={webvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Overlay />
      <HeroContent>
        <Heading>Welcome to Our Service</Heading>
        <Subheading>We make your ideas come to life</Subheading>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
