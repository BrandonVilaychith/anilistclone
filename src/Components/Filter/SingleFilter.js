import styled from 'styled-components';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from '@mui/icons-material/Search';

import {useQuery} from "@apollo/client";


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

`;

function SingleFilter({title, query}) {
    const {loading, error, data} = useQuery(query);

    if (loading) return <h1>Loading</h1>
    console.log(data.GenreCollection)
    return (
        <div>
            <FilterContainer>
                <FilterTitle>{title}</FilterTitle>
                <FilterInputContainer>
                    <FilterPlaceHolder>{title !== "Search" ? "Any" :
                        <SearchIcon fontSize={"medium"}/>}</FilterPlaceHolder>
                    <FilterInput/>
                    <ExpandMoreIcon fontSize={"medium"}/>
                </FilterInputContainer>
            </FilterContainer>
            <div>
                {data.GenreCollection.map((item, index) => {
                    return (
                        <p>{item}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default SingleFilter;