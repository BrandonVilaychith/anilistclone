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

export default titles;