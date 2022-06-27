import React from 'react'
import { useState, useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
 

    //not use static products json but make a api calls

const [products,setProducts] = useState([])

useEffect(() => {

  const fetchProducts = async () => {

    const {data} = await axios.get('/api/products')

    setProducts(data)
  }
      
 fetchProducts()

},[])

return (
    <Container>
<Row>
{products.map( product => (


<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
  <Product product={product} />
</Col> ))}
</Row>

    </Container>
  )
}

export default HomeScreen