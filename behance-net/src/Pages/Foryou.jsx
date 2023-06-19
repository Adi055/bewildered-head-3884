import { Tooltip,Button } from '@chakra-ui/react';
import { SearchIcon } from '@heroicons/react/outline';
import { Input, Stack, InputLeftAddon, InputGroup,InputRightAddon,HStack,SimpleGrid,Select } from '@chakra-ui/react';
import { useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import { BellIcon,EmailIcon} from '@chakra-ui/icons'
import styles from "./Foryou.module.css"
import { Authcontext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons'

import {
    Box,
    ButtonGroup,
    Container,
    Flex,
    IconButton,
    useBreakpointValue,
    Image,
    
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  import logo from "../logo.png"
 

const ForYou=()=>{
    let [data,Setdata]=useState([])
    let [loading,Setloading]=useState(false)
    let [category,Setcategory]=useState("all")
    let {logout}=useContext(Authcontext)
    let navigate=useNavigate()
  
    let FetchData=async (category)=>{
      Setloading(true)
      let url=`http://localhost:8080/products`
      if(category!="all" ){
        url += `?category=${category}`
      }
      try {
        let res=await fetch(url)
        let data=await res.json()
        Setdata(data)
        Setloading(false)
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(()=>{
      FetchData(category)
    },[category])
    const isDesktop = useBreakpointValue({ base: false, lg: true })

        let Logout=()=>{
            logout()
            navigate("/")
        }

    return (
      <div>
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
                    
                   <Tooltip hasArrow label="Search places" bg="white" color="black" >
                <SearchIcon width="20px" />
              </Tooltip>
                    <Button variant="primary" border='1px solid rgb(177, 170, 170)'   borderRadius="1.5em" width="14vw" height="2.7vw">Share your work</Button>
                    <br />
                    <EmailIcon />
                    <br />
                  <BellIcon />
                  <div style={{marginTop:"0px",marginRight:"0px", position: "relative",display: "inline-block"}} className={styles.mainbox1}>
                   <Button variant="primary"  ><img src='https://a5.behance.net/a1af0c8966d3f4bbb8804105ac02415f58b27f44/img/profile/no-image-100.png?cb=264615658' width="35px"/></Button>
                   <div className={styles.dropmenu}>
                    <div className={styles.box1} style={{height:"340px",width:"230px",position:"absolute",top:"6px"}}>
                     
                        <Button variant="primary"  ml='60px'><img src='https://a5.behance.net/a1af0c8966d3f4bbb8804105ac02415f58b27f44/img/profile/no-image-100.png?cb=264615658' width="35px"/></Button>
                        <div style={{marginLeft:"11px"}}><hr style={{color:"grey",width:"180px"}}/></div>
                      
                        <div className={styles.box1} style={{marginTop:"18px",marginLeft:"35px"}}>
                        <h5 style={{fontSize:"15px"}}>Behance Profile</h5>
                        
                        <h5 style={{fontSize:"15px",marginTop:"10px"}}>Manage Freelance Projects</h5>
                        <div style={{marginRight:"24px"}}><hr style={{color:"grey",width:"180px"}}/></div>
                    </div>
                    <div className={styles.box1} style={{marginTop:"15px",marginLeft:"35px"}}>
                        <h5 style={{fontSize:"15px"}}>Purchases</h5>  
                        {/* <br/>
                        <h5 style={{color:"rgb(85, 82, 82)",fontSize:"15px"}}><Link to="/likes" style={{textDecoration:"none",color:"rgb(85, 82, 82)"}}>My Likes</Link></h5> */}
                       
                    </div>
                    <div className={styles.box1} style={{marginTop:"18px",marginLeft:"35px"}}>
                        <h5 style={{fontSize:"15px"}}>Settings</h5>
                        
                    </div>
                    <div className={styles.box1} style={{marginTop:"18px",marginLeft:"35px"}}>
                       <button onClick={Logout}>Sign out</button>
                        
                    </div>
                    </div>
                    
                </div>
                </div>
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
      <div >
          <div className={styles.first}>
        <h1>Today's Work in Progress</h1>
        <br />
        <button style={{backgroundColor:"#0057FF",width:"6vw",height:"4vw",borderRadius:"2em"}}><AddIcon color="white"/></button>
        <h3>Add Yours</h3>
        </div>
        <Stack spacing={3} ml='1050px'>
        
    <Select  size='md' width="180px" border="none" value={category} onChange={(e)=>Setcategory(e.target.value)}>
      <option value="all">All Categories</option>
    <option value='Most Recent'>Most Recent</option>
    <option value='Most Viewed'>Most Viewed</option>
    <option value='Most Appreciated'>Most Appreciated</option>
   
    </Select>
  </Stack>
      </div>
      <div style={{marginTop:"5px"}}>
        <SimpleGrid columns={[2, null, 3]} spacing='40px' width="95%" margin="auto">
          {
            data.map((ele)=>{
              return <div>
              <img style={{ borderRadius:"0.3em"}} src={ele.image}/>
              <h3>{ele.title}</h3>
              </div>
            })
          }
        </SimpleGrid>
      </div>
      
      </div>
    );
}
export default ForYou