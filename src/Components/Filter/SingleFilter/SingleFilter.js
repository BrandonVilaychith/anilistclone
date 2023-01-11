import { onClickHandler} from './functions';
import {useQuery} from '@apollo/client';

import {
    FilterContainer,
    FilterTitle,
    FilterInputContainer,
    FilterPlaceHolder,
    FilterInput,
    DropDown
} from './styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';


function SingleFilter({title, query, setDropDown, dropDown}) {
    const {loading, error, data} = useQuery(query);

    if (loading) return <h1>Loading</h1>

    return (
        <FilterContainer>
            <div>
                <FilterTitle>{title}</FilterTitle>
                <FilterInputContainer>
                    <FilterPlaceHolder>{title !== "Search" ? "Any" :
                        <SearchIcon fontSize={"medium"}/>}</FilterPlaceHolder>
                    <FilterInput/>
                    <ExpandMoreIcon fontSize={"medium"} onClick={() => onClickHandler(setDropDown, dropDown, title)} cursor={"pointer"}/>
                </FilterInputContainer>
            </div>
            <DropDown dropDown={dropDown} title={title}>
                {data.GenreCollection.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}
            </DropDown>
        </FilterContainer>
    )
}

export default SingleFilter;