import { Box } from '@chakra-ui/react'
import { ProductCard } from './productCard'
import { useEffect, useState } from 'react'

import "../../App.css"

function ProductList () {
  const [data, setdata] = useState(null)    // initalise data | setdata est une fonction qui permet de mettre à jour la valeur de data
  const [selectedTypes, setSelectedTypes] = useState([]);


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
  
  const handleCheckboxChange = (type) => {
    // Mettre à jour les types sélectionnés
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((selectedType) => selectedType !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filteredData = data && data.length > 0 ? 
    selectedTypes.length > 0 ? data.filter((product) => selectedTypes.includes(product.type)) : data 
    : [];

  return(

    <Box maxW="100%">
    <Box display={"Flex"} width={"100%"} gap={"4rem"} flexWrap={"wrap"}>

      {/* {filteredData.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))} */}
      {data && data.length > 0 ? 
      ( data.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))
      ) : "" 
    }
    </Box>
  </Box>
)}

export default ProductList;