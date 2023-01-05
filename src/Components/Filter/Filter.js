import styled from 'styled-components';
import SingleFilter from "./SingleFilter";

import { gql } from '@apollo/client';

const FiltersContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(6, 180px);
  grid-gap: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const QUERY = gql`
    {
        GenreCollection
        MediaTagCollection {
            name
        }
    }

`

function Filter() {
    const titles = [
        {
            title: "Search",
            query: QUERY
        },
        {
            title: "Genre",
            query: QUERY
        },
        {
            title: "Year",
            query: QUERY
        },
        {
            title: "Season",
            query: QUERY
        },
        {
            title: "Format",
            query: QUERY
        },
        {
            title: "Airing Status",
            query: QUERY
        },
    ];

    const filters = titles.map((item, idx) => <SingleFilter title={item.title} query={QUERY}/>)

    return (
        <FiltersContainer>
            {filters}
        </FiltersContainer>
    )
}

export default Filter;