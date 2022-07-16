import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Header, Label, Button, Icon, Card, Form, TextArea } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { addToCart } from "../store/actions/cartActions"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify"
import { Link } from 'react-router-dom';
import Carousel from "react-elastic-carousel"
import CardCarousel from './CardCarousel'
import "../App.css"

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
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
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
        <div className="containerPointer">
      <div className="bloc-tabsPointer">
        <button
          className={toggleState === 1 ? "tabsPointer active-tabsPointer" : "tabsPointer"}
          onClick={() => toggleTab(1)}
        >
          Ürün Açıklaması
        </button>
        <button
          className={toggleState === 2 ? "tabsPointer active-tabsPointer" : "tabsPointer"}
          onClick={() => toggleTab(2)}
        >
          Teknik Özellikler
        </button>
        <button
          className={toggleState === 3 ? "tabsPointer active-tabsPointer" : "tabsPointer"}
          onClick={() => toggleTab(3)}
        >
          Yorumlar
        </button>
        <button
          className={toggleState === 4 ? "tabsPointer active-tabsPointer" : "tabsPointer"}
          onClick={() => toggleTab(4)}
        >
          Ödeme Seçenekleri
        </button>
        <button
          className={toggleState === 5 ? "tabsPointer active-tabsPointer" : "tabsPointer"}
          onClick={() => toggleTab(5)}
        >
          Teslimat ve İade
        </button>
        <button
          className={toggleState === 6 ? "tabsPointer active-tabsPointer" : "tabsPointer"}
          onClick={() => toggleTab(6)}
        >
          Hata Bildir
        </button>
      </div>

      <div className="content-tabsPointer">
        <div
          className={toggleState === 1 ? "contentPointer  active-contentPointer" : "contentPointer"}
        >
          <h2>Ürün Açıklaması</h2>
          <Grid>
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

        <div
          className={toggleState === 2 ? "contentPointer  active-contentPointer" : "contentPointer"}
        >
          <h2>Teknik Özellikler</h2>
          <p>
          {product.productDetail}
          </p>
        </div>

        <div
          className={toggleState === 3 ? "contentPointer  active-contentPointer" : "contentPointer"}
        >
          <h2>Yorumlar</h2>
          <p>
            Yorumlar Güncellenmektedir...
          </p>
        </div>
        <div
          className={toggleState === 4 ? "contentPointer  active-contentPointer" : "contentPointer"}
        >
          <h2>Ödeme Seçenekleri</h2>
          <p>
            Kredi Kartı Ödeme Seçenekleri
            Cep telefonlarında kurumsal ticari kartlara taksit imkanı


            Peşin	4.699 TL	4.699 TL
            Peşin	4.699 TL	4.699 TL
            Alışveriş Kredisi Ödeme Seçenekleri




            Fibabanka müşterisi olmasanız dahi alışverişinizi Fibabanka kredisi ile sonlandırabilirsiniz.
            Aşağıdaki Taksit Seçeneklerinden size uygun olanı ileriki aşamalarda Krediniz onaylandıgı takdirde seçebilirsiniz.

            Açıklama	Taksit Tutarı	Toplam Geri Ödeme
            3 Taksit - Faizsiz Masrafsız	1.566,33 TL	4.699,00 TL
            6 Taksit - Faizsiz Masrafsız	783,17 TL	4.699,00 TL
            10 Taksit - Faizsiz Masrafsız	469,90 TL	4.699,00 TL
            12 Taksit - Hayat Sigortalı %12	438,57 TL	5.262,88 TL
            Fibabanka Kredisi Başvuru Adımları
            Siparişi onayla butonuna tıkladığınızda Fibabanka sitesine yönlendirileceksiniz. Açılan sayfadaki formu doldurarak ön başvuruda bulunun.

            Fibabanka müşterisi değilseniz, krediniz onaylandığında Fibabanka’dan tarafınıza SMS ile bir link gönderilecektir. 3 gün içerisinde bu linkten Fibabanka Mobil Uygulamasını indirip, “Müşteri Olmak İstiyorum” adımından görüntülü görüşme yaparak müşteri olup, evraklarınızı online olarak onaylayıp kredi kullanımınızı tamamlayabilirsiniz. Evraklarınızı onaylamanızın ardından ödemeniz tarafımıza aktarıldıktan sonra siparişiniz onaylanıp adresinize kargolanacaktır.

            Fibabanka müşterisi olmanız durumunda, krediniz onaylandığında, kredi evraklarınızı online olarak onaylamanızın ardından ödemeniz tarafımıza aktarılacak ve siparişiniz onaylanıp adresinize kargolanacaktır.
          </p>
        </div>
        <div
          className={toggleState === 5 ? "contentPointer  active-contentPointer" : "contentPointer"}
        >
          <h2>Teslimat</h2>
          <p>
            TESLİMAT

            Standart Teslimat;
            Standart teslimat seçeneğinde siparişleriniz Kolay Gelsin,Yurtiçi ve Horoz Lojistik ile gönderilmektedir. Siparişiniz faturalandıktan sonra ortalama 3-4 iş gününde adresinize teslimatı sağlanmaktadır.Televizyon ve klima siparişleriniz ise Horoz Lojistik ile gönderilmektedir. Siparişinizi verirken, teslimat aşamasında Kolay Gelsin,Yurtiçi ya da Horoz Lojistik’i seçerek Standart Teslimat seçeneğinden faydalanabilirsiniz. 250 TL ve üzeri ürünlerde kargo ücretsizdir.


            Hızlı Teslimat;
            Hızlı teslimat seçeneğinde siparişleriniz Kolay Gelsin Kargo’yla gönderilmektedir. Siparişiniz faturalandıktan sonra ortalama 2 iş gününde adresinize teslimatı sağlanmaktadır. Siparişinizi verirken, teslimat aşamasında Kolay Gelsin Kargo’yu seçerek  (adresiniz uygunsa teslimat aşamasında çıkacaktır) Hızlı Teslimat seçeneğinden faydalanabilirsiniz. 250 TL ve üzeri ürünlerde kargo ücretsizdir. *Hızlı teslimattan yararlanmak için siparişini vereceğiniz ürünün stok durumunun uygun olması ve teslimat adresinin Kolay Gelsin Kargo’nun hizmet bölgesinde olması gerekmektedir. Kolay Gelsin’in teslimat yaptığı iller; Adana, Ankara, Antalya, Balıkesir, Bursa, Eskişehir, Gaziantep, Hatay, İstanbul, İzmir, Kayseri, Kırıkkale, Kocaeli, Konya, Manisa, Mersin, Muğla, Sakarya, Tekirdağ, Yalova

            Mağaza Teslim;
            Mağazadan teslim seçeneğinden faydalanabilmek için siparişinizi verirken, teslimat aşamasında Mağaza Teslim seçeneğini seçmeniz gerekmektedir. Siparişiniz tamamlandıktan sonra seçtiğiniz mağazamızdan hemen teslim alabilirsiniz.

            *Mağaza teslim seçeneği yalnızca 3D Secure kullanılarak verilen siparişlerde geçerlidir, teslimat yalnızca kredi kartı sahibine yapılmaktadır.
            7 iş günü içerisinde teslim alınmayan siparişler iptal edilerek ücret iadesi işlemi başlatılacaktır.

            Siparişinizi mağaza teslim seçeneği ile vermek istiyorsanız aşağıdaki adımları uygulayabilirsiniz:

            Satın almak istediğiniz ürünü sepete ekleyin ve Teslimat aşamasında gidin.
            Teslimat aşamasının altındaki mağazadan teslim seçeneğini seçin.
            Teslim almak istediğiniz mağazayı seçerek siparişinizi tamamlayın.
            Siparişinizi verir vermez seçmiş olduğunuz mağazadan ürünü hemen teslim alabilirsiniz.




            İADE VE İPTAL

            Siparişiniz henüz faturalanmadıysa;
            Hesabım Siparişlerim bölümünden sipariş iptal talebinizi iletebilirsiniz. Aynı zamanda 0850 222 56 56 numaralı çağrı merkezimizi arayıp dahili 1’i tuşlayarak ya da 0537 851 18 12 numaralı Whatsapp Hattımız’a iptal talebinizi iletebilirsiniz. İadeniz ortalama 1-2 iş gününde bankanıza bildirilmiş olacaktır.

            Siparişiniz kargo sürecindeyse;
            0850 222 56 56 numaralı çağrı merkezimizi arayıp dahili 1’i tuşlayarak ya da 0537 851 18 12 numaralı Whatsapp Hattımız’a iptal talebinizi iletebilirsiniz. Bu durumda gönderi tarafımızca kargodan geri çekilecektir. Ürün tarafımıza ulaştığında iade işlemleriniz başlatılacak ve ortalama 3 iş gününde iadeniz bankanıza bildirilecektir.

            Siparişinizi teslim aldıysanız;
            Cayma hakkınızı kullanmak için ürünü teslim aldıktan sonra 14 gün içerisinde aşağıdaki şekillerde tarafımıza başvurabilirsiniz.

            0850 222 56 56 numaralı çağrı merkezimizi arayıp dahili 1’i tuşlayarak arayabilirsiniz.
            0537 851 18 12 numaralı Whatsapp hattımıza yazabilirsiniz.
            info@vatanbilgisayar.com adresimize e posta gönderebilirsiniz.
            Size en yakın mağazamıza ürünü götürebilirsiniz.
            İade ve iptal sayfasından kurye çağır butonunu kullanarak adresinize kurye çağırabilirsiniz. 1F176A iade koduyla tarafımıza ürünü gönderebilirsiniz.


            *Cayma hakkınızı kullanmak istediğiniz ürünü tarafımıza gönderirken tüm kutu, aksesuar ve faturasıyla birlikte göndermeniz gerekmektedir.
          </p>
        </div>
        <div
          className={toggleState === 6 ? "contentPointer  active-contentPointer" : "contentPointer"}
        >
          <h2>Hata Bildir</h2>
          <p>
            Hatalı olduğunu düşündüğünüz ürün için bizimle iletişime geçebilirsiniz.
            <Form>
              <TextArea placeholder='Hatalı olduğunu düşündüğünüz ürün için bizimle iletişime geçebilirsiniz.' />
              <Button>Gönder</Button>
            </Form>
          </p>
        </div>
      </div>
    </div>
      </Grid>

    </div>

  )
}
