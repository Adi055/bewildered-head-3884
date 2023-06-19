import { Tooltip,Button } from '@chakra-ui/react';
import { SearchIcon } from '@heroicons/react/outline';
import { Input, Stack, InputLeftAddon, InputGroup,InputRightAddon,HStack,SimpleGrid,Select } from '@chakra-ui/react';
import styles from "./Home.module.css"
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Home = () => {
  let [data,Setdata]=useState([])
  let [loading,Setloading]=useState(false)
  let [category,Setcategory]=useState("all")

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

  return (
    <div>
      <Navbar/>
    <div >
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
    <div className={styles.footer}>
      <HStack mt="100px" ml='340px'>
      <h3><Link to="/signup"><u>Sign up</u></Link> or <Link to="/signin"><u>Sign in</u></Link> to your account to view more work personalized to your preferences.</h3>
      </HStack>
      <HStack spacing="2" ml='450px' mt="30px">
                    
                    
                    <Link to="/signup"><Button variant="primary"  bg="blue" color="white" borderRadius="1.5em" width="13vw" height="2.7vw">Sign Up With Email</Button></Link>
                    <Button variant="tertiary"  color="grey"   width="1vw" height="1vw">or</Button>
                    <button><img src="https://th.bing.com/th?id=OIP.9g4dkKVAUyciOuDI9_vEYQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="50px"/></button>
                    <button><img src="https://th.bing.com/th?id=OIP.hGaetDAQWapgIJbIOhPhXwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="30px"/></button>
                    <br />
                    <button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZBdB0NcrWNlzdXQCMSs9qEdNi-lRty88veNsiRBV&s" alt="" width="28px"/></button>
                    
       </HStack> 
      
    </div>
    </div>
  );
};

export default Home;
