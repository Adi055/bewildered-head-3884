import { Tooltip } from '@chakra-ui/react';
import { SearchIcon } from '@heroicons/react/outline';
import { Input, Stack, InputLeftAddon, InputGroup,InputRightAddon,HStack } from '@chakra-ui/react';
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div>
        <div className={styles.first}>
      <Stack spacing={4}>
        
        <InputGroup>
          <InputLeftAddon bg="white" color="black" borderRadius='0.2em' ml='10px' border='none'>
            <Tooltip hasArrow label="Search places" bg="white" color="black" >
              <SearchIcon width="20px" />
            </Tooltip>
          </InputLeftAddon>
          <Input type="tel" placeholder="Search the creative world at work" width="400px" borderRadius='1em' border='none'/>
          <InputRightAddon bg="white" color="black" borderRadius='0.2em' width='700px' border='none'>
            <HStack spacing="4" ml='8px'>
                <div style={{height:"2vw",width:"6vw", backgroundColor:"black",color:"white",borderRadius:"1em"}}>
            <h3 style={{marginLeft:"12px",fontSize:"15px"}}>Projects</h3>
            </div>
           <br />
           <h3>Assets</h3>
           <br />
           <h3>Images</h3>
           <br />
           <h3>Prototypes</h3>
           <br />
           <h3>Streams</h3>
           <br />
           <h3>People</h3>
           <br />
           <h3>Moodboards</h3>
           
            </HStack>
           
          </InputRightAddon>
        </InputGroup>
      </Stack>
      </div>
    </div>
  );
};

export default Home;
