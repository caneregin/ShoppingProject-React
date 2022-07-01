import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Image, Grid, Header, Label, Button, Icon } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { addToCart } from "../store/actions/cartActions"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify"

export default function ProductDetail() {
  let { name } = useParams();
  const dispatch = useDispatch()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let productService = new ProductService()
    productService.getByProductId(name).then(result => setProduct(result.data.data))
  }, [])
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // cartArray.push(product.productId);
    toast.success(`${product.productName} sepete eklendi!`);
    //console.log("ahandaburdaarray"+cartArray);
  }
  let imglink = "http://localhost:3000/" + product.productImage
  let taksit12 = parseInt(product.unitPrice / 12)
  return (
    <div>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            {/* <img src={product.productImage} /> */}
            <img src={imglink} />
            {/* <Image src={require(`../images/${product.productImage}`)} /> */}

          </Grid.Column>
          <Grid.Column className="cartDetailMainRight">
            <Header as='h5'>{product.productShortname}</Header>
            <Header as='h4'>{product.productName}</Header>
            <Header style={{color:"#003177"}} as='h1'>{product.unitPrice}</Header>
            <Label color='red' horizontal>
              <Header inverted as='h5'>{taksit12} TL'den başlayan taksitlerle</Header></Label>

            <Header as='h5'>Peşin Fiyatına Taksit İmkanı</Header>
            <Button className='cartButton' animated='fade' onClick={() => handleAddToCart(product)}>
              <Button.Content className='cartButtonContent' >Sepete Ekle</Button.Content>
            </Button>
            <p><b>Teslimat Seçenekleri</b></p>
            <p><Icon name='checkmark' size='small' /><b>Standart teslimat (ücretsiz):</b> Yurtiçi Kargo ve Horoz lojistik ile verilen siparişler ortalama 3-4 iş gününde tarafınıza teslim edilir.</p>
            <p><Icon name='checkmark' size='small' /><b>Hızlı teslimat (ücretsiz):</b> Kolay Gelsin kargo ile verilen siparişler ortalama 2 iş gününde tarafınıza teslim edilir.</p>
            <p><Icon name='checkmark' size='small' /><b>Mağazadan teslim:</b> Dilediğiniz mağazamızdan ürünü hemen teslim alabilirsiniz.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as='h4'>{product.productDetail}</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
