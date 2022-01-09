import React from 'react'; 
import { Box, Link, Text } from '@chakra-ui/react';
import { primaryColor } from '../../theme';

interface SearchItemDescProps { 
    text: string;
    url: string;
}

const SearchItemDescription:React.FunctionComponent<SearchItemDescProps> = ({text, url}) => (
    <Box mt='0.25rem'>
        <Text textColor='gray.500' noOfLines={[2,3]} my='0' mb='0' > {text} </Text>
        <Link href={url} as='a' textColor={primaryColor} fontWeight='semibold' textDecor='underline'> อ่านต่อ </Link>
    </Box>
)
export default SearchItemDescription