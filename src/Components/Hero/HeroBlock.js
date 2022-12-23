import React from "react";
import styled from "styled-components";

function HeroBlock() {
    return (
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
    );
}

export default HeroBlock;