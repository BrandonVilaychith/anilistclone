import React from "react";
import styled from "styled-components";

const BlockHeading = styled.h3`
  margin-bottom: 8px;
  color: #ecf6fe;
  font-size: 1.8rem;
  font-weight: 700;
  /* line-height: 146%; */
`;

const Block = styled.div`
  /* border: 1px solid blue; */
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlockText = styled.p`
  font-size: 1.4rem;
  color: #acd5f2;
  line-height: 146%;
`;

const BlockImage = styled.img`
  width: 80px;
  margin-right: 30px;
`;

function HeroBlock(props) {
  const { heading, content, img, index } = props;
  return (
    <Block key={index}>
      <BlockImage src={img} alt='information' />
      <div>
        <BlockHeading>{heading}</BlockHeading>
        <BlockText>{content}</BlockText>
      </div>
    </Block>
  );
}

export default HeroBlock;
