import React from 'react'; 
import { Box, Flex, Image, Text, Stack } from '@chakra-ui/react';

import SearchItemTitle from './Title';
import SearchItemDescription from './Description';
import SearchItemTags from './Tags';
import SearchItemImages from './Images';

import { SearchItemModel } from '../../model/SearchItemModel';
interface SearchItemProps { 
    item: SearchItemModel;
}

const SearchItem:React.FunctionComponent<SearchItemProps> = ({item}) => {

    return (
    <Flex w={{ sm:'100%', md:'110%', lg:'120%'}} bg='blackAlpha.50' borderRadius='xl' py='1rem' px='1rem'>
        <Image 
            w='180px'
            h='250px'
            objectFit='cover' 
            src={item.photos[0]} 
            borderRadius='2xl'
        />
        <Stack justifyContent='space-between' px='5' fontSize='0.75rem' h='full' > 
            <Box>
                <SearchItemTitle text={item.title} url={item.url} /> 
                <SearchItemDescription text={item.description} url={item.url} />
            </Box>

            <Box>
                <Stack isInline fontSize='0.6rem' textColor='gray.500'>
                    <Text> หมวด </Text>
                    {item.tags.map(
                        (tag) => 
                        <SearchItemTags text={tag} />
                    )}
                </Stack>
                <Stack isInline pt='1'>
                    {item.photos.slice(1).map((photo,i)=>
                        <SearchItemImages key={`${item.eid}-${i}`} src={photo} />
                    )}
                </Stack>
            </Box>
        </Stack>
    </Flex>
    );
}

export default SearchItem