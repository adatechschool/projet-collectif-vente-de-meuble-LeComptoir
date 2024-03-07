import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure, Button, Input, Heading} from '@chakra-ui/react'

function CustomDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()  
    return (
      <>
      
        <Button colorScheme='teal' onClick={onOpen}>
          Filter  
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
              <Input placeholder='Type here...' />
          <Heading paddingBottom={"1rem"}>Nom</Heading>
          <Heading paddingBottom={"1rem"}>Type</Heading>
          <Heading paddingBottom={"1rem"}>Prix</Heading>
          <Heading paddingBottom={"1rem"}>Disponibilité</Heading>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default CustomDrawer