import styled from "styled-components";

const FilterInput = styled.input`
  all: unset;
  //border: 1px solid red;
  width: 100%;
`;

const FilterInputContainer = styled.div`
  background-color: #151F2E;
  display: grid;
  grid-template-columns: auto 20px;
  padding: 11px 10px;
  padding-left: 13px;
  border-radius: 6px;

`;

const FilterPlaceHolder = styled.div`
  position: absolute;
  font-weight: 700;
  font-size: 1.3rem;
  color: #647380;
`;

const FilterTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px 0;
`;

const FilterContainer = styled.div`
  position: relative;
  width: 180px;
`;

const DropDown = styled.div`
  visibility: ${props => (props.title === props.dropDown ? "visible" : "hidden")};
  opacity: ${props => (props.title === props.dropDown ? 1 : 0)};
  transition: visibility 0.2s linear, opacity 0.2s linear;
  background-color: blue;
  position: absolute;
  width: 100%;
  h4 {
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: .06rem;
    padding: 4px;
    text-transform: uppercase;
  }
`;

const DropDownListItem = styled.li`
  list-style-type: none;
`;

export {
    FilterInput,
    FilterInputContainer,
    FilterPlaceHolder,
    FilterTitle,
    FilterContainer,
    DropDown,
    DropDownListItem
}