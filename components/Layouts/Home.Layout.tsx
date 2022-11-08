import { Container, Center } from '@chakra-ui/react';
import React from 'react'; 
import Header from '../navigation/Header';

const HomeLayout = ({ children }: any) => {
  return (
    <Container height={'100vh'} maxW='full' p='0'>
      <Container maxW='full' bg='black' h='3rem'>
        <Center color='white' fontSize={'3xl'} fontWeight='400'>
          Set your wallet to devnet
        </Center>
      </Container>
      <Header />
      {children}
    </Container>
  );
};

export default HomeLayout;
