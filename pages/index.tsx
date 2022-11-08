import { Container } from '@chakra-ui/react';
import DoKuwan from '../components/DoKuwan';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Container
      p='0'
      maxW={'8xl'}
      minH='calc(100vh - 5rem - 3rem)'
      display={'flex'}
      flexDirection='column'
      justifyContent={'space-between'}
      alignItems='center'
    >
      <Hero />
      <DoKuwan />
    </Container>
  );
}
