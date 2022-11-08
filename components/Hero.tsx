import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ButtonWrapper from './HOC/Button.HOC';

export default function Hero() {
  const router = useRouter();
  return (
    <>
      <Container maxW={'xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pt='10vh'
          pb='2vh'
        >
          <Heading
            fontFamily={'VT323'}
            fontWeight={500}
            fontSize={{ base: '5xl', sm: '6xl', md: '7xl', lg: '7xl' }}
            lineHeight={'85%'}
            letterSpacing='0%'
          >
            Airdrop{' '}
            <Text as='span' color='#E9C51D'>
              Do Koin
            </Text>{' '}
            into your wallet
          </Heading>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <ButtonWrapper>
              <Button
                onClick={() => {
                  //
                }}
                variant='unstyled'
                p='0rem 1.5rem'
                height={'3rem'}
                background='black'
                color='white'
                fontSize={'2xl'}
                fontWeight='400'
              >
                Airdrop 1 Do Koin
              </Button>
            </ButtonWrapper>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
