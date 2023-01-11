import { useState } from 'react';
import SingleFilter from "../SingleFilter/SingleFilter";
import titles from "./data";

import { FiltersContainer } from "./styles";

function Filter() {
    const [dropDown, setDropDown] = useState(null)

    return (
        <FiltersContainer>
            {
                titles.map((item, idx) => (
                    <SingleFilter
                        key={idx}
                        title={item.title}
                        query={item.query}
                        dropDown={dropDown}
                        setDropDown={setDropDown}
                    />
                ))
            }
        </FiltersContainer>
    )
}

export default Filter;