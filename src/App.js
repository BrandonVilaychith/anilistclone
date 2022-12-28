import "./global.css";

import Nav from "./Components/Navigation/Nav";
import Hero from "./Components/Hero/Hero";
import Filter from "./Components/Filters/Filter";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
`;

function App() {
    return (
        <div className='App'>
            <Nav/>
            <Container>
                <Hero/>
                <Filter/>
            </Container>
        </div>
    );
}

export default App;
