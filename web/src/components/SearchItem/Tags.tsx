import React from 'react'; 
import { Link } from '@chakra-ui/react';

interface SearchItemTagsProps { 
    text: string;
}

const SearchItemTags:React.FunctionComponent<SearchItemTagsProps> = ({text}) => (
    <Link to='#' textDecor='underline'>
        {text}
    </Link>
)
export default SearchItemTags