import { useEffect, useState, } from "react"
import Hero_card from "./Hero_card"
import { Button, Flex,useDisclosure} from "@chakra-ui/react"
import axios from 'axios'
import { Heromodal } from "./Heromodal"
const Flex_cont=({mx})=>{
    
    
    
    const [flex_data,set_flex_data]=useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
             const dataarr = await axios.get(`http://localhost:5500/getData`);
              console.log("jgj")
              console.log(dataarr);
              set_flex_data(dataarr.data.allHeroes)
            //   console.log(response.data);
            } catch (error) {
              console.error('Error fetching data: ', error);
            }
          };
      
          fetchData();
          
    },[])
    //console.log({flex_data});
    const handleCardData = (fdata) => {
        // Update data received from child component
        let updated_data;
        if(fdata.Heroname==='delete'){
            console.log(fdata.id)
            updated_data=flex_data.filter((item)=> item.id !== fdata.id)
            updated_data=updated_data.map((obj)=>{
                if(obj.id>fdata.id){
                return {id:obj.id-1,Heroname:obj.Heroname,src:obj.src,Description:obj.Description,Hp:obj.Hp}}
                else{
                    return {id:obj.id,Heroname:obj.Heroname,src:obj.src,Description:obj.Description,Hp:obj.Hp}
                }
            })
            const deleteCard = async () =>{
                const res =await axios.post("http://localhost:5500/delete",{id:fdata.id})
                console.log(res.data)

            }
            deleteCard();
         }
        else{
        updated_data=flex_data.filter((element)=>{
            return element.id!==fdata.id;

        })
        updated_data.splice(fdata.id-1,0,fdata);
        axios.put('http://localhost:5500/update', fdata).then(response => {
            console.log(response.data);
            })
            .catch(error => {
            console.log(error);
            });
                                                    
    }
        set_flex_data(updated_data);
        console.log(flex_data)
        // onData(updated_data);
      };
      const { isOpen, onOpen, onClose } = useDisclosure()
      const addChange=(cardData)=>{
        let updated_flex_data=flex_data
        const addedCard={id:updated_flex_data.length+1,Heroname:cardData.Heroname,Description:cardData.Description,Hp:cardData.Hp,src:"src/assets/doc strange.jpeg"}
        updated_flex_data.push(addedCard)
        set_flex_data(updated_flex_data);
        axios.post('http://localhost:5500/create',addedCard).then((res)=>{
            console.log(res.data);
        }).catch(error=>{
            console.log(error);
        })
      }
   return (<div><Flex justify="space-between" wrap="wrap" mx={mx}>
    {flex_data && flex_data.map((card)=>{
        
        return(<Hero_card onflexData={handleCardData} key={card.id} id={card.id} src={card.src} Hp={card.Hp} Description={card.Description} Heroname={card.Heroname}></Hero_card>)
    })}
    </Flex>
   <div align="center"><Button variant='solid' onClick={onOpen} colorScheme='blue' my="20px">Add Hero</Button></div> 
   <Heromodal onmodalData={addChange} isOpen={isOpen} onClose={onClose} Hp="" Description="" Heroname=""></Heromodal></div>)

}
export default Flex_cont;