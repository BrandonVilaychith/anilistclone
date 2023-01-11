// noinspection JSValidateTypes

import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from "styled-components";
import HeroBlock from "./HeroBlock";
import heroData from "./heroData";

const HeroContainer = styled.div`
  color: #f0f3f6;
  max-width: 940px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
`;

const HeroTitle = styled.h1`
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 3.2rem;
  text-align: center;
`;

const HeroSubTitle = styled.h2`
  text-align: center;
  color: #acd5f2;
  max-width: 370px;
  margin: 0 auto;
  line-height: 142%;
  font-size: 2.1rem;
  font-weight: 500;
`;

const HeroBlockContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 70px 136px;
  grid-template-columns: repeat(2, minmax(300px, 400px));
  margin-top: 85px;
`;

const JoinButton = styled(Link)`
  margin: 0 auto;
  background-color: #3577FF;
  font-weight: 700;
  color: white;
  text-decoration: none;
  width: 200px;
  text-align: center;
  border-radius: 30px;
  height: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  padding-left: 55px;
  margin-top:70px;
`;

const ButtonCircle = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 37px;
  width: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

function Hero() {
  return (
    <HeroContainer>
      <HeroTitle>The next-generation anime platform</HeroTitle>
      <HeroSubTitle>
        Track, share, discover your favorite anime and manga with AniList.
      </HeroSubTitle>
      <HeroBlockContainer>
        {heroData.map((item, index) => (
          <HeroBlock
            img={item.img}
            heading={item.heading}
            content={item.content}
            key={index}
          />
        ))}
      </HeroBlockContainer>
      <JoinButton>
          Join Now
          <ButtonCircle>
            <ChevronRightIcon style={{color: "#3577FF"}}/>
          </ButtonCircle>
      </JoinButton>
    </HeroContainer>
  );
}

export default Hero;
