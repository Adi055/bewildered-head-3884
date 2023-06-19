import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    Image,
    
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  import logo from "../logo.png"
 import { Link  } from 'react-router-dom'


let Navbar=()=>{

    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
      <Box as="section" pb={{ base: '10', md: '24' }}>
        <Box as="nav" bg="bg.surface" boxShadow="sm">
          <Container py={{ base: '4', lg: '2' }} mr='800px'>
            <HStack spacing="1" justify="space-between">
           <img src={logo} width="60px"/>
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="text" colorScheme="gray" spacing="0" >
                    {['For You', 'Discover', 'Live', 'Hire','Jobs'].map((item) => (
                      <Button  key={item}>{item}</Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="2" ml='450px'>
                    
                    <Link to="/signin"><Button variant="tertiary" bg="rgb(210, 248, 248)" color="blue"  borderRadius="1.5em" width="7vw" height="2.7vw">Log in</Button></Link>
                    <Link to="/signup"><Button variant="primary"  bg="blue" color="white" borderRadius="1.5em" width="7.5vw" height="2.7vw">Sign up</Button></Link>
                    <br />
                    <Button variant="primary" border='1px solid rgb(177, 170, 170)'   borderRadius="1.5em" width="7.5vw" height="2.7vw">Free Trial</Button>
                  </HStack> 
                </Flex>
              ) : (
                <IconButton
                  variant="tertiary"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
}
export default Navbar


  
  