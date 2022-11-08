import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Router, useRouter } from 'next/router';
import ButtonWrapper from '../HOC/Button.HOC';
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Header() { 
  const router = useRouter(); 
  return (
    <>
      <Box pt='1rem' px={4} h='5rem'>
        <Flex
          mx='auto'
          maxW='4xl'
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Box as='button' fontSize={'5xl'} onClick={() => router.push('/')}>
            <svg
              width='44'
              height='44'
              viewBox='0 0 44 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='7.62939e-06'
                y='10.0833'
                width='5.04167'
                height='23.8333'
                fill='black'
              />
              <rect
                x='38.9583'
                y='10.0833'
                width='5.04167'
                height='23.8333'
                fill='black'
              />
              <rect
                x='33.9167'
                y='10.0833'
                width='5.04167'
                height='23.8333'
                fill='#FFE552'
              />
              <rect
                x='5.04167'
                y='10.0833'
                width='5.04167'
                height='23.8333'
                fill='#D8BD23'
              />
              <rect
                x='10.0833'
                y='10.0833'
                width='23.8333'
                height='23.8333'
                fill='#F7D828'
              />
              <rect
                x='5.04167'
                y='5.04169'
                width='5.04167'
                height='5.04167'
                fill='black'
              />
              <rect
                x='33.9167'
                y='5.04169'
                width='5.04167'
                height='5.04167'
                fill='black'
              />
              <rect
                x='5.04167'
                y='33.9167'
                width='5.04167'
                height='5.04167'
                fill='black'
              />
              <rect
                x='33.9167'
                y='33.9167'
                width='5.04167'
                height='5.04167'
                fill='black'
              />
              <rect x='10.0833' width='23.8333' height='5.04167' fill='black' />
              <rect
                x='10.0833'
                y='5.04169'
                width='23.8333'
                height='5.04167'
                fill='#FFE552'
              />
              <rect
                x='10.0833'
                y='33.9167'
                width='23.8333'
                height='5.04167'
                fill='#D8BD23'
              />
              <rect
                x='10.0833'
                y='38.9583'
                width='23.8333'
                height='5.04167'
                fill='black'
              />
              <rect
                x='19.0208'
                y='26.8125'
                width='5.95833'
                height='3.66667'
                fill='#FFE866'
              />
              <rect
                x='19.0208'
                y='13.2917'
                width='5.95833'
                height='3.66667'
                fill='#FFE866'
              />
              <rect
                x='15.3542'
                y='13.2917'
                width='3.66667'
                height='17.1875'
                fill='#FFE866'
              />
              <rect
                x='24.9792'
                y='16.9583'
                width='3.66667'
                height='9.85416'
                fill='#FFE866'
              />
            </svg>
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <ButtonWrapper>
                <WalletMultiButton />
              </ButtonWrapper>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
