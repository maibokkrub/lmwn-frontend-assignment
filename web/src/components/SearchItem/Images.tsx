import React from 'react'; 
import { Image } from '@chakra-ui/react';

interface SearchItemImgProps {
    key: string;
    src: string;
    alt?:string;
}

const SearchItemImages:React.FunctionComponent<SearchItemImgProps> = ({key, src, alt}) => (
    <Image 
        boxSize='100px'
        key={['search-item-img', key].join('-')}
        src={src}
        borderRadius='2xl'
    />
)

export default SearchItemImages