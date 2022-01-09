import React from 'react'; 
import { Heading, Link, Text } from '@chakra-ui/react';

interface SearchItemTitleProps { 
    text: string;
    url: string;
}

const SearchItemTitle:React.FunctionComponent<SearchItemTitleProps> = ({text, url}) => (
    <Heading fontWeight='extrabold' fontSize='1.3rem' py='0'> 
        <Link as='a' href={url}> {text} </Link>
    </Heading>
)
export default SearchItemTitle