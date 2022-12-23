import React from 'react';
import styled from 'styled-components';
import stats from '../../images/stats.svg';
import apps from '../../images/apps.svg';
import social from '../../images/social.svg';
import custom from '../../images/custom.svg';

const HeroContainer = styled.div`
  color: #f0f3f6;
  /* border: 1px solid red; */
  max-width: 940px;
  width: 100%;
  margin: 0 auto;
  /* padding: 60px 80px; */
  margin-top: 100px;
`;

const HeroTitle = styled.h1`
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 32px;
  text-align: center;
`;

const HeroSubTitle = styled.h2`
  text-align: center;
  color: #acd5f2;
  max-width: 370px;
  margin: 0 auto;
  line-height: 142%;
  font-size: 21px;
  font-weight: 500;
`;

const HeroBlockContainer = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 70px 136px;
  grid-template-columns: repeat(2, minmax(300px, 400px));
  margin-top: 85px;
`;

const HeroBlock = styled.div`
  /* border: 1px solid blue; */
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlockImage = styled.img`
  width: 80px;
  margin-right: 30px;
`;

const BlockTextContainer = styled.div``;

const BlockText = styled.p`
  font-size: 14px;
  color: #acd5f2;
  line-height: 146%;
`;

const BlockHeading = styled.h3`
  margin-bottom: 8px;
  color: #ecf6fe;
  font-size: 18px;
  font-weight: 700;
  /* line-height: 146%; */
`;

function Hero() {
    return (
        <HeroContainer>
            <HeroTitle>The next-generation anime platform</HeroTitle>
            <HeroSubTitle>
                Track, share, discover your favorite anime and manga with AniList.
            </HeroSubTitle>
            <HeroBlockContainer>
                <HeroBlock>
                    <BlockImage src={stats} alt="information" />
                    <BlockTextContainer>
                        <BlockHeading>Discover your obsession</BlockHeading>
                        <BlockText>
                            What are your highest rated genres or most watched voice actors?
                            Follow your watching habits over time with in-depth statistics.
                        </BlockText>
                    </BlockTextContainer>
                </HeroBlock>
                <HeroBlock>
                    <BlockImage src={social} alt="information" />
                    <BlockTextContainer>
                        <BlockHeading>Join the conversation</BlockHeading>
                        <BlockText>
                            Share your thoughts with our thriving community, make friends,
                            socialize, and receive recommendations.
                        </BlockText>
                    </BlockTextContainer>
                </HeroBlock>
                <HeroBlock>
                    <BlockImage src={apps} alt="information" />
                    <BlockTextContainer>
                        <BlockHeading>Bring AniList anywhere</BlockHeading>
                        <BlockText>
                            Keep track of your progress on-the-go with one of many AniList
                            apps across iOS, Android, macOS, and Windows.
                        </BlockText>
                    </BlockTextContainer>
                </HeroBlock>
                <HeroBlock>
                    <BlockImage src={custom} alt="information" />
                    <BlockTextContainer>
                        <BlockHeading>Tweak it to your liking</BlockHeading>
                        <BlockText>
                            Customize your scoring system, title format, color scheme, and
                            much more! Also, we have a dark mode.
                        </BlockText>
                    </BlockTextContainer>
                </HeroBlock>
            </HeroBlockContainer>
        </HeroContainer>
    );
}

export default Hero;
