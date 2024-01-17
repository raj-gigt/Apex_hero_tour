import { Card, CardHeader, CardBody, CardFooter,Stack,Button,ButtonGroup,Heading,Divider,Image,Text,Flex, Box,useDisclosure } from '@chakra-ui/react'
import { Heromodal } from './Heromodal';
import { useState } from 'react';
const Hero_card=({src,Hp,Description,Heroname,id,onflexData})=>{
   const { isOpen, onOpen, onClose } = useDisclosure()
   const [card_data,set_card_data]=useState({
    src:src,
    Hp:Hp,
    Description:Description,
    Heroname:Heroname,
    id:id
   })
   const handleChange = (e) => {
    let updated_card_data=card_data;
    updated_card_data.src=card_data.src;
    updated_card_data.Hp=e.Hp;
    updated_card_data.Heroname=e.Heroname;
    updated_card_data.Description=e.Description;
    set_card_data(updated_card_data);

    // Pass data to the parent component
    onflexData(updated_card_data);
  };
  const deleteCard=()=>{
    onflexData({Heroname:"delete",id:id})
  }

   return (<Box height="569.39px" width="384px" marginBottom="50px"><Card  bg="#EBF2F2" _hover={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}} >
    <CardHeader>
        
            <Heading fontSize="26px" fontFamily="copperplate" align="center" noOfLines={1}>{card_data.Heroname}</Heading>
            <Heading fontSize="26px" fontFamily="copperplate" align="center">HP: {card_data.Hp}</Heading>
        
    </CardHeader>
  <CardBody>
    <Box align="center"><Image
      width="250px"
      height="250px"
      src={card_data.src}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      align="center"
    /></Box>
    
    <Stack mt='6' spacing='3'>
      
      <Text noOfLines={3} align="center">
        {card_data.Description}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='teal' width="250px" onClick={onOpen} >
        Edit Stats
      </Button>
      <Button onClick={deleteCard} variant='solid' colorScheme='red'>Delete</Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Heromodal onmodalData={handleChange} isOpen={isOpen} onClose={onClose} Hp={card_data.Hp} Description={card_data.Description} Heroname={card_data.Heroname}></Heromodal>
</Box>
 )
}
export default Hero_card;