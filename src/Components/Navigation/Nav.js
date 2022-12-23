import React from "react";
import logo from "../../images/allogo.png";

import {
    NavItem,
    NavContainer,
    LoginButton,
    SignUpButton,
    Logo,
    NavItemContainer,
} from "./styles";

function Nav() {
    return (
        <NavContainer>
            <NavItemContainer>
                <Logo src={logo} />
                <div>
                    <NavItem>Anime</NavItem>
                    <NavItem>Manga</NavItem>
                    <LoginButton>Login</LoginButton>
                    <SignUpButton>Sign Up</SignUpButton>
                </div>
            </NavItemContainer>
        </NavContainer>
    );
}

export default Nav;
