import { Center } from '@chakra-ui/react';
import React from 'react';

const ButtonWrapper = ({ children }: any) => {
  return (
    <Center
      position='relative'
      background={'black'}
      width='auto'
      zIndex={'2'}
      _active={{
        top: '2px',
      }}
      _before={{
        content: `' '`,
        display: 'block',
        position: 'absolute',
        top: '10px',
        bottom: '10px',
        left: '-10px',
        right: '-10px',
        background: 'black',
        zIndex: '-1',
      }}
      _after={{
        content: `' '`,
        display: 'block',
        position: 'absolute',
        top: '4px',
        bottom: '4px',
        left: '-6px',
        right: '-6px',
        background: 'black',
        zIndex: '-1',
      }}
    >
      {children}
    </Center>
  );
};

export default ButtonWrapper;
