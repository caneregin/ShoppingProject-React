import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { addToCart } from "../store/actions/cartActions"
import { toast } from "react-toastify"

export default function ProductList() {
  const dispatch = useDispatch()

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService()
    productService.getProductWithCategoryDetailsAccordingToCategoryName("Bilgisayar").then(result => setProducts(result.data.data))
  }, [])

  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // cartArray.push(product.productId);
    toast.success(`${product.productName} sepete eklendi!`);
    //console.log("ahandaburdaarray"+cartArray);
  }
console.log("HAHAHAHAHHA"+(products))
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.productName}>
              <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
              <Table.Cell>{product.productDetail}</Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.categoryName}</Table.Cell>
              <Table.Cell><Button onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button></Table.Cell>
            </Table.Row>
          ))
          }

        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
