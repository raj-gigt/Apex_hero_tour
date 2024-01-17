import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormLabel,
    Input,
    FormControl
  } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
 export function Heromodal({isOpen,onClose,Hp,Description,Heroname,onmodalData}) {
    
    return (
      <>
        
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            
            <Formik initialValues={{Heroname:Heroname,Description:Description,Hp:Hp}}
            onSubmit={(values)=>{
                onmodalData(values)
            }}>
            {(props)=>(
            <Form>
            <ModalBody>
                <Field name="Heroname">
                {({ field, form }) => (
                    <FormControl>
                    <FormLabel>
                        Heroname
                    </FormLabel>
                    <Input {...field} placeholder="enter hero's name"></Input>
                    </FormControl>
                    )}
                </Field>
                <Field name="Hp">
                {({ field, form }) => (
                    <FormControl>
                    <FormLabel>
                        Hp
                    </FormLabel>
                    <Input {...field} placeholder="enter hp"></Input>
                    </FormControl>
                )}
                </Field>
                <Field name="Description">
                    {({ field,form})=>(
                    <FormControl>
                    <FormLabel>
                        Description
                    </FormLabel>
                    <Input {...field} placeholder="Description"></Input>
                    </FormControl>
            )}
                </Field>
                
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='teal' type='submit'>Confirm</Button>
            </ModalFooter>
            </Form>)}
            </Formik>
          </ModalContent>
        </Modal>
      </>
    )
  }