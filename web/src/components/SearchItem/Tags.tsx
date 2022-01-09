import React from 'react'; 
import { Box, Link } from '@chakra-ui/react';

interface SearchItemTagsProps { 
    text: string;
}

const SearchItemTags:React.FunctionComponent<SearchItemTagsProps> = ({text}) => (
    <Box>
        <Link to='#' textDecor='underline'>
            {text}
        </Link>
    </Box>
)
export default SearchItemTags