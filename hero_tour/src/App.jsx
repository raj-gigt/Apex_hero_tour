import { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack, Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Flex_cont from './components/Flex_cont'
import {Data} from "./data/Data"
function App() {
  // const [data, setData] = useState(Data)
  // const [sorteddata, setsorteddata] = useState([]);
 

  // const handleData = (hdata) => {
  //   // Update data received from child component
  //   setData(hdata);
    
  // };
  
  // const gotodash=()=>{
  //   history.push('/')
  // }
  // const gotoheroes=()=>{
  //   history.push('/heroes')
  // }
  // const sortData = (data) => {
  //   return data.sort((a, b) => parseInt(b.Hp) - parseInt(a.Hp)).slice(0,4);
  //  };
   
  //  useEffect(()=>{
    
    
  //     console.log(data)
  //     console.log(sorteddata);
  //      let copydata=data.sort((a, b) => parseInt(b.Hp) - parseInt(a.Hp));

  //      setsorteddata(copydata.filter((element,index)=>{
  //       return index<4;
  //      }))

  //  },[data])
  return (
    <>
    <BrowserRouter>
    <HStack>
      <Link to="/dashboard"><Button isActive={{variant:'soft-rounded', colorScheme:'green'}}>Dashboard</Button></Link>
      
      <Link to="/heroes"><Button isActive={{variant:'soft-rounded', colorScheme:'green'}}>Heroes</Button></Link>
    </HStack>
      
    
    <Routes>
      <Route path="/dashboard" element={<div><Text fontSize='48px' align='center' fontFamily='copperplate'>Welcome to hero tour</Text><Flex_cont mx="100"></Flex_cont></div>}></Route>
      <Route path="/heroes" element={<div><Text fontSize='48px' align='center' fontFamily='copperplate'>Here are TOP 4 ranked heroes</Text></div>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
