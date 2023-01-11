import { gql } from '@apollo/client';

const QUERY = gql`
    {
        GenreCollection
        MediaTagCollection {
            name
        }
    }
`

const titles = [
    {
        title: "Search",
        query: QUERY
    },
    {
        title: "Genres",
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

export default titles;