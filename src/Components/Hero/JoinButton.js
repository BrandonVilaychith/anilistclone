import React from "React";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`

`;

function JoinButton() {
    return (
        <Button>Join Now</Button>
    )
}

export default JoinButton;