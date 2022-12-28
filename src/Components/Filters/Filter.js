import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";

const FilterSelections = styled.div`
  border: 1px solid red;
  display: block;
  width: 200px;
`;

const FilterHeading = styled.h4`
  
`;

const FilterInput = styled.div`
  visibility: hidden;
`;

const GENRE_AND_TAGS = gql`
    {
        GenreCollection
        MediaTagCollection {
            name
        }
    }
`;

function Filter() {
    const { loading, error, data } = useQuery(GENRE_AND_TAGS)

    console.log(data)
    return (
        <div>
            <FilterSelections>
                <FilterHeading>Genres</FilterHeading>
                <FilterInput>
                    {data.GenreCollection.map((item, idx) => {
                        return (
                            <p>{item}</p>
                        )
                    })}
                </FilterInput>
            </FilterSelections>
        </div>
    )
}

export default Filter;