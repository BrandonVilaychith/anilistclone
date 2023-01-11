import { onClickHandler} from './functions';
import {useQuery} from '@apollo/client';

import {
    FilterContainer,
    FilterTitle,
    FilterInputContainer,
    FilterPlaceHolder,
    FilterInput,
    DropDown,
    DropDownListItem
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
                    <FilterPlaceHolder>
                        {title !== "Search" ? "Any" : <SearchIcon fontSize={"medium"}/>}
                    </FilterPlaceHolder>
                    <FilterInput/>
                    <ExpandMoreIcon fontSize={"medium"} onClick={() => onClickHandler(setDropDown, dropDown, title)} cursor={"pointer"}/>
                </FilterInputContainer>
            </div>
            <DropDown dropDown={dropDown} title={title}>
                <h4>{title}</h4>
                {data.GenreCollection.map((item, index) => {
                    return (
                        <DropDownListItem key={index}>{item}</DropDownListItem>
                    )
                })}
            </DropDown>
        </FilterContainer>
    )
}

export default SingleFilter;