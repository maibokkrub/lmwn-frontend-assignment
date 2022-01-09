import React from 'react'; 
import { Image } from '@chakra-ui/react';

interface SearchItemImgProps {
    key: string;
    src: string;
    alt?:string;
}

const SearchItemImages:React.FunctionComponent<SearchItemImgProps> = ({key, src, alt}) => (
    <Image 
        boxSize='90px'
        key={['search-item-img', key].join('-')}
        src={src}
        alt={alt}
        borderRadius='2xl'
    />
)

export default SearchItemImages