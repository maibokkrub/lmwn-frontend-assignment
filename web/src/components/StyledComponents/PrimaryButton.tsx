import react from 'React'; 
import { Button as ChakraButton } from '@chakra-ui/react';
import { primaryColor } from '../../theme';

function PrimaryButton(props:any) { 
    return ( 
        <ChakraButton 
            bgColor={primaryColor}
            textColor='whitesmoke'
            {...props} 
        />
    )
}

export default PrimaryButton;