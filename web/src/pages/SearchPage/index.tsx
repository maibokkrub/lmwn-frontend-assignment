import { Container, Flex, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'; 
import {useParams, useNavigate} from 'react-router-dom'; 
import SearchItem from '../../components/SearchItem';

interface SearchPageProps { 

}

const SearchPage:React.FunctionComponent<SearchPageProps> = () => {
    const {query} = useParams();
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState('');

    const handleUserInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if( e.key === 'Enter' )
            navigate(`/search/${userInput}`)
    }

    useEffect(() => {
        if( query ){
            setUserInput(query);
            //TODO: Perform Data fetching and display
        }
    }, [query])
    
    return (
    <>
        <Input 
            variant='flushed'
            textAlign='center'
            placeholder='หาที่เที่ยวแล้วไปกัน..'
            value={userInput} 
            onChange={(e)=>setUserInput(e.target.value)}
            onKeyDown={handleUserInput}
        />
        
        {/* Search Results */}
        <Flex>
            <VStack mt='2rem' spacing='2rem'>
                <SearchItem />
                <SearchItem />
                <SearchItem />
            </VStack>
        </Flex>
    </>
    ); 
}
export default SearchPage