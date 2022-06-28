import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Image, Grid, Header, Label } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
  let { name } = useParams();
  console.log("EHEHEHEHHEHEHEHEHEHEHEHEHEHEH" + name)
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let productService = new ProductService()
    productService.getByProductId(name).then(result => setProduct(result.data.data))
  }, [])
  console.log("nameeeeeeeeee" + product.productImage)
  let abofis =  "http://localhost:3000/"+product.productImage
  return (
    <div>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            {/* <img src={product.productImage} /> */}
            <img src={abofis} />
            {/* <Image src={require(`../images/${product.productImage}`)} /> */}

          </Grid.Column>
          <Grid.Column>
            <Header as='h5'>{product.productShortname}</Header>
            <Header as='h4'>{product.productName}</Header>
            <Header as='h1'>{product.unitPrice}</Header>
            <Label color='red' horizontal>
              <Header inverted as='h5'>724TLden başlayan taksitlerle</Header></Label>

            <Header as='h5'>Peşin Fiyatına Taksit İmkanı</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
