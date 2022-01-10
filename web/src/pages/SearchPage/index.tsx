import React, { useEffect, useState } from 'react'; 
import {useParams, useNavigate} from 'react-router-dom'; 
import { MdSearch } from "react-icons/md"
import { Flex, Input, Spinner, VStack, Text } from '@chakra-ui/react';

import PrimaryButton from '../../components/StyledComponents/PrimaryButton';
import SearchItem from '../../components/SearchItem';
import { fetchSearchByKeyword } from './SearchService';
import { SearchItemModel } from '../../model/SearchItemModel';

interface SearchPageProps { 

}

const SearchPage:React.FunctionComponent<SearchPageProps> = () => {
    const {query} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); 
    const [data, setData] = useState([] as SearchItemModel[]) ;
    const [userInput, setUserInput] = useState('');

    const goToSearch = () => navigate(`/search/${userInput}`);
    const handleUserInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if( e.key === 'Enter' )
            goToSearch();
    }

    const dataSetter = (data:SearchItemModel[]) => { 
        setData(data);
        setLoading(false);
    }

    useEffect(() => {
        if( query !== undefined ){
            setLoading(true); 
            setUserInput(query);
            fetchSearchByKeyword(query, dataSetter);
        }
    }, [query])
    
    return (
    <>
        <VStack> 
            <Input 
                variant='flushed'
                textAlign='center'
                placeholder='หาที่เที่ยวแล้วไปกัน..'
                value={userInput} 
                onChange={(e)=>setUserInput(e.target.value)}
                onKeyDown={handleUserInput}
            />
            <PrimaryButton 
                display={{sm:'inline-flex', 'lg':'none'}}
                onClick={goToSearch}
                rightIcon={<MdSearch />}
            >
                ค้นหา
            </PrimaryButton>
        </VStack>

        
        {/* Search Results */}
        <Flex>
            <VStack mt='2rem' spacing='2rem'>
            { 
                loading &&
                    <Spinner size='lg'/>
            }
            {
                data?.length && (
                    data.map((place:SearchItemModel) => (
                        <SearchItem item={place} />
                    )) ||
                        <Text textAlign='center'> 
                            Unfortunately, there is no paradise like that 😔 
                        </Text> 
                    )
            }
            </VStack>
        </Flex>
    </>
    ); 
}
export default SearchPage
