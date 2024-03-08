import { Box, Flex } from '@chakra-ui/react'
import { ProductCard } from './productCard'
import { useEffect, useState } from 'react'

function ProductList () {
  const [data, setdata] = useState(null)
  
  const getData = async () => {
    const res = await fetch("http://localhost:3000/meubles")
    const data = await res.json()
    setdata(data)
  }
  
  useEffect(()=>{
    const fetchMeubles = async () =>{
      await getData()
    }
    fetchMeubles()
  }, [])
  

  return(
    <Box
    maxW="100rem"
    >
    <Box display={"Flex"} gap={"4rem"} >
      {data && data.length > 0 ? 
      ( data.map((product) => (
        <ProductCard key={product.id} product={product}/>
        ))
      ) : "" 
    }
    </Box>
  </Box>
)}

export default ProductList;