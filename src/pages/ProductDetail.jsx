import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Image, Grid, Header, Label, Button, Icon, Card, Menu } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { addToCart } from "../store/actions/cartActions"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify"
import { Link } from 'react-router-dom';
import Carousel from "react-elastic-carousel"
import CardCarousel from './CardCarousel'
import "../App.css"
import MenuPointer from '../layout/MenuPointer'

export default function ProductDetail() {
  let { name } = useParams();
  const dispatch = useDispatch()
  const [product, setProduct] = useState([]);
  let changestate = useSelector(state => state.changestate)

  let changeArray = []
  changeArray.push(changestate.payload)
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
  const [productsForLook, setProductsForLook] = useState([]);
  let changeArrayForLook = []
  changeArrayForLook.push(changestate.payload)
  useEffect(() => {
    let productService = new ProductService()
    productService.getProductWithCategoryDetailsAccordingToCategoryName(changeArrayForLook).then(result => setProductsForLook(result.data.data))
  }, changeArrayForLook)
  // let imglinkfl = "http://localhost:3000/" + productsForLook.productImage
  // let imglink = "http://localhost:3000/" + product.productImage
  // let imglink1 = "http://localhost:3000/" + product.productImageDetail1
  // let imglink2 = "http://localhost:3000/" + product.productImageDetail2
  let taksit12 = parseInt(product.unitPrice / 12)
  const breakPoints = [
    { width: 150, itemsToShow: 1 },
    { width: 300, itemsToShow: 2 },
    { width: 450, itemsToShow: 3 },
    { width: 600, itemsToShow: 4 },
    { width: 750, itemsToShow: 5 }
  ]
  return (
    <div>
      <p><span>&nbsp;{changeArray[0]}</span><span><Icon name='angle right' /></span>
        <span>{product.productBrandname}</span><span><Icon name='angle right' /></span>
        <span>{product.productShortname}</span></p>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            {/* <img src={product.productImage} /> */}
            <img src={product.productImage} />
            {/* <Image src={require(`../images/${product.productImage}`)} /> */}

          </Grid.Column>
          <Grid.Column className="cartDetailMainRight">
            <Header as='h5'>{product.productShortname}</Header>
            <Header as='h4'>{product.productName}</Header>
            <Header style={{ color: "#003177" }} as='h1'>{product.unitPrice}&nbsp;<span style={{ fontSize: "1rem" }}>TL</span></Header>
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
        <p><b>Bu Ürüne Bakanlar Bunlara da Baktı</b></p>


        <Carousel breakPoints={breakPoints}>

          {productsForLook.map((productfl) => (
              <CardCarousel number=
              <Link to={`/products/${productfl.id}`}>
                <Card style={{marginLeft: 100, paddingLeft: 32}}>
                  <img style={{width:131, height: 131 }} src={productfl.productImage} />
                  <Card.Content>
                    <Card.Description style={{width:131, height: 60 }}>
                      {productfl.productName}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='cart' />
                      {product.unitPrice}TL
                    </a>
                  </Card.Content>
                </Card></Link> />
            ))
          }
        </Carousel>
        <MenuPointer/>
        <Grid.Row columns={1}>
          <Grid columns='two' divided>
            <Grid.Row>
              <Grid.Column>
                <img src={product.productImageDetail1} />
              </Grid.Column>
              <Grid.Column>
                <p className='pd1'>{product.productDetail1}</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <img src={product.productImageDetail2} />
              </Grid.Column>
              <Grid.Column>
                <p className='pd2'>{product.productDetail2}</p>
                <p className='pd3'>{product.productDetail3}</p>
                <p className='pd3'>{product.productDetail4}</p>
                <p className='pd3'>{product.productDetail5}</p>
                <p className='pd3'>{product.productDetail6}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>

    </div>

  )
}
