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
              <Header inverted as='h5'>{taksit12} TL'den ba??layan taksitlerle</Header></Label>

            <Header as='h5'>Pe??in Fiyat??na Taksit ??mkan??</Header>
            <Button className='cartButton' animated='fade' onClick={() => handleAddToCart(product)}>
              <Button.Content className='cartButtonContent' >Sepete Ekle</Button.Content>
            </Button>
            <p><b>Teslimat Se??enekleri</b></p>
            <p><Icon name='checkmark' size='small' /><b>Standart teslimat (??cretsiz):</b> Yurti??i Kargo ve Horoz lojistik ile verilen sipari??ler ortalama 3-4 i?? g??n??nde taraf??n??za teslim edilir.</p>
            <p><Icon name='checkmark' size='small' /><b>H??zl?? teslimat (??cretsiz):</b> Kolay Gelsin kargo ile verilen sipari??ler ortalama 2 i?? g??n??nde taraf??n??za teslim edilir.</p>
            <p><Icon name='checkmark' size='small' /><b>Ma??azadan teslim:</b> Diledi??iniz ma??azam??zdan ??r??n?? hemen teslim alabilirsiniz.</p>
          </Grid.Column>
        </Grid.Row>
        <p><b>Bu ??r??ne Bakanlar Bunlara da Bakt??</b></p>


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
          ??r??n A????klamas??
        </button>
        <button
          className={toggleState === 2 ? "tabsPointer active-tabsPointer" : "tabsPointer"}
          onClick={() => toggleTab(2)}
        >
          Teknik ??zellikler
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
          ??deme Se??enekleri
        </button>
        <button
          className={toggleState === 5 ? "tabsPointer active-tabsPointer" : "tabsPointer"}
          onClick={() => toggleTab(5)}
        >
          Teslimat ve ??ade
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
          <h2>??r??n A????klamas??</h2>
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
          <h2>Teknik ??zellikler</h2>
          <p>
          {product.productDetail}
          </p>
        </div>

        <div
          className={toggleState === 3 ? "contentPointer  active-contentPointer" : "contentPointer"}
        >
          <h2>Yorumlar</h2>
          <p>
            Yorumlar G??ncellenmektedir...
          </p>
        </div>
        <div
          className={toggleState === 4 ? "contentPointer  active-contentPointer" : "contentPointer"}
        >
          <h2>??deme Se??enekleri</h2>
          <p>
            Kredi Kart?? ??deme Se??enekleri
            Cep telefonlar??nda kurumsal ticari kartlara taksit imkan??


            Pe??in	4.699 TL	4.699 TL
            Pe??in	4.699 TL	4.699 TL
            Al????veri?? Kredisi ??deme Se??enekleri




            Fibabanka m????terisi olmasan??z dahi al????veri??inizi Fibabanka kredisi ile sonland??rabilirsiniz.
            A??a????daki Taksit Se??eneklerinden size uygun olan?? ileriki a??amalarda Krediniz onayland??g?? takdirde se??ebilirsiniz.

            A????klama	Taksit Tutar??	Toplam Geri ??deme
            3 Taksit - Faizsiz Masrafs??z	1.566,33 TL	4.699,00 TL
            6 Taksit - Faizsiz Masrafs??z	783,17 TL	4.699,00 TL
            10 Taksit - Faizsiz Masrafs??z	469,90 TL	4.699,00 TL
            12 Taksit - Hayat Sigortal?? %12	438,57 TL	5.262,88 TL
            Fibabanka Kredisi Ba??vuru Ad??mlar??
            Sipari??i onayla butonuna t??klad??????n??zda Fibabanka sitesine y??nlendirileceksiniz. A????lan sayfadaki formu doldurarak ??n ba??vuruda bulunun.

            Fibabanka m????terisi de??ilseniz, krediniz onayland??????nda Fibabanka???dan taraf??n??za SMS ile bir link g??nderilecektir. 3 g??n i??erisinde bu linkten Fibabanka Mobil Uygulamas??n?? indirip, ???M????teri Olmak ??stiyorum??? ad??m??ndan g??r??nt??l?? g??r????me yaparak m????teri olup, evraklar??n??z?? online olarak onaylay??p kredi kullan??m??n??z?? tamamlayabilirsiniz. Evraklar??n??z?? onaylaman??z??n ard??ndan ??demeniz taraf??m??za aktar??ld??ktan sonra sipari??iniz onaylan??p adresinize kargolanacakt??r.

            Fibabanka m????terisi olman??z durumunda, krediniz onayland??????nda, kredi evraklar??n??z?? online olarak onaylaman??z??n ard??ndan ??demeniz taraf??m??za aktar??lacak ve sipari??iniz onaylan??p adresinize kargolanacakt??r.
          </p>
        </div>
        <div
          className={toggleState === 5 ? "contentPointer  active-contentPointer" : "contentPointer"}
        >
          <h2>Teslimat</h2>
          <p>
            TESL??MAT

            Standart Teslimat;
            Standart teslimat se??ene??inde sipari??leriniz Kolay Gelsin,Yurti??i ve Horoz Lojistik ile g??nderilmektedir. Sipari??iniz faturaland??ktan sonra ortalama 3-4 i?? g??n??nde adresinize teslimat?? sa??lanmaktad??r.Televizyon ve klima sipari??leriniz ise Horoz Lojistik ile g??nderilmektedir. Sipari??inizi verirken, teslimat a??amas??nda Kolay Gelsin,Yurti??i ya da Horoz Lojistik???i se??erek Standart Teslimat se??ene??inden faydalanabilirsiniz. 250 TL ve ??zeri ??r??nlerde kargo ??cretsizdir.


            H??zl?? Teslimat;
            H??zl?? teslimat se??ene??inde sipari??leriniz Kolay Gelsin Kargo???yla g??nderilmektedir. Sipari??iniz faturaland??ktan sonra ortalama 2 i?? g??n??nde adresinize teslimat?? sa??lanmaktad??r. Sipari??inizi verirken, teslimat a??amas??nda Kolay Gelsin Kargo???yu se??erek  (adresiniz uygunsa teslimat a??amas??nda ????kacakt??r) H??zl?? Teslimat se??ene??inden faydalanabilirsiniz. 250 TL ve ??zeri ??r??nlerde kargo ??cretsizdir. *H??zl?? teslimattan yararlanmak i??in sipari??ini verece??iniz ??r??n??n stok durumunun uygun olmas?? ve teslimat adresinin Kolay Gelsin Kargo???nun hizmet b??lgesinde olmas?? gerekmektedir. Kolay Gelsin???in teslimat yapt?????? iller; Adana, Ankara, Antalya, Bal??kesir, Bursa, Eski??ehir, Gaziantep, Hatay, ??stanbul, ??zmir, Kayseri, K??r??kkale, Kocaeli, Konya, Manisa, Mersin, Mu??la, Sakarya, Tekirda??, Yalova

            Ma??aza Teslim;
            Ma??azadan teslim se??ene??inden faydalanabilmek i??in sipari??inizi verirken, teslimat a??amas??nda Ma??aza Teslim se??ene??ini se??meniz gerekmektedir. Sipari??iniz tamamland??ktan sonra se??ti??iniz ma??azam??zdan hemen teslim alabilirsiniz.

            *Ma??aza teslim se??ene??i yaln??zca 3D Secure kullan??larak verilen sipari??lerde ge??erlidir, teslimat yaln??zca kredi kart?? sahibine yap??lmaktad??r.
            7 i?? g??n?? i??erisinde teslim al??nmayan sipari??ler iptal edilerek ??cret iadesi i??lemi ba??lat??lacakt??r.

            Sipari??inizi ma??aza teslim se??ene??i ile vermek istiyorsan??z a??a????daki ad??mlar?? uygulayabilirsiniz:

            Sat??n almak istedi??iniz ??r??n?? sepete ekleyin ve Teslimat a??amas??nda gidin.
            Teslimat a??amas??n??n alt??ndaki ma??azadan teslim se??ene??ini se??in.
            Teslim almak istedi??iniz ma??azay?? se??erek sipari??inizi tamamlay??n.
            Sipari??inizi verir vermez se??mi?? oldu??unuz ma??azadan ??r??n?? hemen teslim alabilirsiniz.




            ??ADE VE ??PTAL

            Sipari??iniz hen??z faturalanmad??ysa;
            Hesab??m Sipari??lerim b??l??m??nden sipari?? iptal talebinizi iletebilirsiniz. Ayn?? zamanda 0850 222 56 56 numaral?? ??a??r?? merkezimizi aray??p dahili 1???i tu??layarak ya da 0537 851 18 12 numaral?? Whatsapp Hatt??m??z???a iptal talebinizi iletebilirsiniz. ??adeniz ortalama 1-2 i?? g??n??nde bankan??za bildirilmi?? olacakt??r.

            Sipari??iniz kargo s??recindeyse;
            0850 222 56 56 numaral?? ??a??r?? merkezimizi aray??p dahili 1???i tu??layarak ya da 0537 851 18 12 numaral?? Whatsapp Hatt??m??z???a iptal talebinizi iletebilirsiniz. Bu durumda g??nderi taraf??m??zca kargodan geri ??ekilecektir. ??r??n taraf??m??za ula??t??????nda iade i??lemleriniz ba??lat??lacak ve ortalama 3 i?? g??n??nde iadeniz bankan??za bildirilecektir.

            Sipari??inizi teslim ald??ysan??z;
            Cayma hakk??n??z?? kullanmak i??in ??r??n?? teslim ald??ktan sonra 14 g??n i??erisinde a??a????daki ??ekillerde taraf??m??za ba??vurabilirsiniz.

            0850 222 56 56 numaral?? ??a??r?? merkezimizi aray??p dahili 1???i tu??layarak arayabilirsiniz.
            0537 851 18 12 numaral?? Whatsapp hatt??m??za yazabilirsiniz.
            info@vatanbilgisayar.com adresimize e posta g??nderebilirsiniz.
            Size en yak??n ma??azam??za ??r??n?? g??t??rebilirsiniz.
            ??ade ve iptal sayfas??ndan kurye ??a????r butonunu kullanarak adresinize kurye ??a????rabilirsiniz. 1F176A iade koduyla taraf??m??za ??r??n?? g??nderebilirsiniz.


            *Cayma hakk??n??z?? kullanmak istedi??iniz ??r??n?? taraf??m??za g??nderirken t??m kutu, aksesuar ve faturas??yla birlikte g??ndermeniz gerekmektedir.
          </p>
        </div>
        <div
          className={toggleState === 6 ? "contentPointer  active-contentPointer" : "contentPointer"}
        >
          <h2>Hata Bildir</h2>
          <p>
            Hatal?? oldu??unu d??????nd??????n??z ??r??n i??in bizimle ileti??ime ge??ebilirsiniz.
            <Form>
              <TextArea placeholder='Hatal?? oldu??unu d??????nd??????n??z ??r??n i??in bizimle ileti??ime ge??ebilirsiniz.' />
              <Button>G??nder</Button>
            </Form>
          </p>
        </div>
      </div>
    </div>
      </Grid>

    </div>

  )
}
