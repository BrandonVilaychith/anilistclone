import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  background-color: #152232;
  padding: 9px 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  padding: 18px 16px;
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: 0.08em;
  color: #a6a79e;
  display: inline-block;
  &:visited {
    color: white;
  }
`;

const LoginButton = styled(NavItem)`
  margin-left: 70px;
  padding-right: 24px;
`;

const SignUpButton = styled(NavItem)`
  background-color: #3577ff;
  padding: 10px 15px;
  border-radius: 6px;
  font-weight: 800;
`;

const Logo = styled.img`
  align-self: center;
`;

const NavItemContainer = styled.div`
  max-width: 1320px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;

export {
    NavContainer,
    NavItem,
    Logo,
    LoginButton,
    SignUpButton,
    NavItemContainer
};
