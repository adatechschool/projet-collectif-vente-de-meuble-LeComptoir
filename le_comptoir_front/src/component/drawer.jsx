import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure, Button, Input, Heading} from '@chakra-ui/react'

function CustomDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()  
    return (
      <>
        <Button colorScheme='green' onClick={onOpen}>
          Filtrer  
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent style={{ background: '#fff6eb' }}>
            <DrawerCloseButton />
  
            <DrawerBody style={{ color: '#d8c0aa'}}>
            
          <Heading paddingTop={"2rem"} paddingBottom={"1rem"}>Type</Heading>
          <input type="checkbox" id="table" name="table" value="table" 
          style={{ width: "20px", height: "20px"}} />

          <label for="type" 
          style={{ fontSize: 25}}> Table </label>
          <br />

          <input type="checkbox" id="chaise" name="chaise" value="chaise" 
          style={{ width: "20px", height: "20px"}} />

          <label for="type" 
          style={{ fontSize: 25}}> Chaise </label>
          <br />

          <input type="checkbox" id="canape" name="canape" value="canape" 
          style={{ width: "20px", height: "20px"}} />

          <label for="type" 
          style={{ fontSize: 25}}> Canapé </label>

          <Heading paddingTop={"2rem"} paddingBottom={"1rem"}>Prix</Heading>
          <label for="max-input" 
          style={{ fontSize: 25}} >Prix max. </label>

          <input type="number" id="max-input" name="max-input" 
          style={{ borderRadius: "10px", fontSize: 25,  textAlign: "right", height: "40px", width:"50%"}}/>

          <span style={{ fontSize: 25}}> €</span>

            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}
              style={{ background: '#d8c0aa', color: "white" }}>
                Cancel
              </Button>
              <Button colorScheme='green' id='save'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default CustomDrawer