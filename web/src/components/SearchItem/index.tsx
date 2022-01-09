import React from 'react'; 
import { Link } from 'react-router-dom'
import { Badge, Box, Flex, Heading, Image,Tag,Text, Stack, Container, StackDivider, VStack } from '@chakra-ui/react';
import SearchItemTags from './Tags';
import SearchItemDescription from './Description';
import SearchItemImages from './Images';
import SearchItemTitle from './Title';

interface SearchItemProps { 

}

const __mockData = {
    "title": "ลัดเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว",
    "eid": "2",
    "url": "https://www.wongnai.com/trips/new-bts-route-trips",
    "description": "BTS สายสีเขียวเปิดให้บริการเพิ่ม 5 สถานีทั้งที งานนี้ต้องไม่มีพลาด รีบไปอัปเดต เช็กอินที่เที่ยวคูล ๆ ไปได้ง่ายก่อนใคร\n\nเริ่มกันที่ ‘สถานีห้าแยกลาดพร้าว’ เป็นสถานีที่เชื่อมกับเซ็นทรัลลาดพร้าว ซึ่งเป็นห้างที่เรียกได้ว่าครบจบในที่เดียว แต่เราไม่ได้จะพามาเที่ยวห้างหรอกนะ มาถึงนี่ทั้งทีเราจะพาไปทำกิจกรรมสายแอดเวนเจอร์สุดมันส์ และต่อด้วยหาร้านนั่งกินแก้เหนื่อยกันดีกว่า",
    "photos": [
        "https://img.wongnai.com/p/1600x0/2020/02/18/458b9a31b62b408d91137fbe152f7450.jpg",
        "https://img.wongnai.com/p/1600x0/2020/02/18/08bca1c784db4d7f92e93656b5376681.jpg",
        "https://img.wongnai.com/p/1600x0/2020/02/18/95bd2ca371e24436bcb24d432a86836c.jpg",
        "https://img.wongnai.com/p/1600x0/2020/02/18/68289e188ea54e00b5e9d806cfd0fc54.jpg"
    ],
    "tags": [
        "คาเฟ่",
        "ร้านกาแฟ",
        "จุดถ่ายรูป",
        "เที่ยวใกล้กรุง",
        "กรุงเทพมหานคร"
    ]
};

const SearchItem:React.FunctionComponent<SearchItemProps> = () => {
    const item = __mockData;

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

            <Stack>
                <Stack isInline fontSize='0.6rem' textColor='gray.500'>
                    <Text> หมวด </Text>
                    {item.tags.map(
                        (tag) => 
                        <SearchItemTags text={tag} />
                    )}
                </Stack>
                <Stack isInline>
                    {item.photos.slice(1).map((photo,i)=>
                        <SearchItemImages key={`${item.eid}-${i}`} src={photo} />
                    )}
                </Stack>
            </Stack>
        </Stack>
    </Flex>
    );
}

export default SearchItem