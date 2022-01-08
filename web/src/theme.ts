import { extendTheme } from '@chakra-ui/react'

const primaryColor = '#159bd8';

const theme = extendTheme({
  fonts: {
    heading: 'Noto Sans Thai',
    body: 'Noto Sans Thai',
  },
  styles: {
    global: {
      body:{
        bgColor: '#EFFBFF',
      },
      h1: {
        color: primaryColor,
      },
      a: {
        color: primaryColor,
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },

})

export default theme