import { Box, Flex } from '@chakra-ui/react'
import { ProductCard } from './productCard'
import { useEffect, useState } from 'react'

function ProductList () {
  const [data, setdata] = useState(null)    // initalise data | setdata est une fonction qui permet de mettre à jour la valeur de data
  
  const getData = async () => {       //sert à update la valeur de data
    const res = await fetch("http://localhost:3000/meubles")
    const meubles = await res.json()
    setdata(meubles) // ~data = meubles
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
    <Box display={"Flex"} width={"100%"} gap={"4rem"} flexWrap={"wrap"}>
      {data && data.length > 0 ? 
      ( data.map((product) => (
        <Box width="20%">
        <ProductCard key={product.id} product={product}/>
        </Box>
        ))
      ) : "" 
    }
    </Box>
  </Box>
)}

export default ProductList;