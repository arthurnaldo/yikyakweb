import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

// Import Google Fonts
import { Global, css } from '@emotion/react';

// Define global styles
const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Fredoka+One&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// Define prop types
interface RotateProps {
  rotate?: string;
}

const AppContainer = styled.div`
  font-family: 'Comic Neue', cursive;
  background-color: #F0F8FF;
  color: #333;
  overflow-x: hidden;
`;

const Navbar = styled(motion.nav)`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 1rem 5%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 3px solid #FF6B6B;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-family: 'Fredoka One', cursive;
  font-size: 1.8rem;
  color: #FF6B6B;
  text-shadow: 2px 2px 0 #FFD166;
  transform: rotate(-2deg);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 0;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: #FF6B6B;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: #FF6B6B;
      
      &:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;

const Hero = styled(motion.section)`
  padding: 8rem 5% 4rem;
  background: linear-gradient(135deg, #FF6B6B 0%, #FFD166 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-family: 'Fredoka One', cursive;
  font-size: 4.5rem;
  margin-bottom: 1rem;
  text-shadow: 3px 3px 0 #FFD166, 6px 6px 0 rgba(0,0,0,0.2);
  transform: rotate(-1deg);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  line-height: 1.6;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: white;
  color: #FF6B6B;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  font-size: 1.3rem;
  cursor: pointer;
  border: 3px solid #FFD166;
  transform: rotate(1deg);

  &:hover {
    transform: translateY(-3px) rotate(1deg);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
`;

const Features = styled(motion.section)`
  padding: 4rem 5%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    height: 50px;
    background: #F0F8FF;
    clip-path: polygon(0 0, 100% 100%, 100% 100%, 0 100%);
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 3rem;
  font-family: 'Fredoka One', cursive;
  color: #FF6B6B;
  text-shadow: 2px 2px 0 #FFD166;
  transform: rotate(-1deg);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)<RotateProps>`
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  border: 3px solid #FFD166;
  transform: rotate(${props => props.rotate || '0deg'});

  i {
    font-size: 3.5rem;
    color: #FF6B6B;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 0 #FFD166;
  }

  h3 {
    margin-bottom: 1rem;
    font-family: 'Fredoka One', cursive;
    color: #FF6B6B;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 5%;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    height: 50px;
    background: #333;
    clip-path: polygon(0 0, 100% 100%, 100% 100%, 0 100%);
  }
  
  p {
    font-size: 1.1rem;
  }
`;

const YakEmoji = styled.span`
  font-size: 1.5em;
  margin: 0 0.2rem;
`;

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AppContainer>
      <Global styles={globalStyles} />
      
      <Navbar
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <NavContent>
          <Logo>YikYak Web <YakEmoji>🦬</YakEmoji></Logo>
          <NavLinks>
            <Link to="features" smooth={true} duration={500}>Features</Link>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </NavLinks>
        </NavContent>
      </Navbar>

      <Hero>
        <HeroContent>
          <Title
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            YikYak Web <YakEmoji>🦬</YakEmoji>
          </Title>
          <Subtitle
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The modern web-based anonymous social network. Share your thoughts, connect with your community, and be part of the conversation - all in your browser.
          </Subtitle>
          <CTAButton
            href="https://arthurnaldo.github.io/yikyakbrowser/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Launch App Now <YakEmoji>🚀</YakEmoji>
          </CTAButton>
        </HeroContent>
      </Hero>

      <Features id="features" ref={ref}>
        <SectionTitle
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Why Choose YikYak Web? <YakEmoji>🤔</YakEmoji>
        </SectionTitle>
        <FeatureGrid>
          {[
            {
              icon: "fas fa-user-secret",
              title: "100% Anonymous",
              description: "Share your thoughts freely without revealing your identity. Your privacy is our top priority.",
              rotate: "-1deg"
            },
            {
              icon: "fas fa-globe",
              title: "Location-Based",
              description: "Connect with people in your area and discover what's happening around you.",
              rotate: "1deg"
            },
            {
              icon: "fas fa-mobile-alt",
              title: "Instant Access",
              description: "No downloads required. Just visit the website and start yakking immediately.",
              rotate: "-2deg"
            }
          ].map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              rotate={feature.rotate}
            >
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Features>

      <Footer id="contact">
        <p>&copy; 2024 YikYak Web. All rights reserved. <YakEmoji>🦬</YakEmoji></p>
      </Footer>
    </AppContainer>
  );
}

export default App;
