## E-Ticaret projemin ReactJS tarafıdır. State yönetimi için redux kullanılmıştır. Arayüz büyük oranda semantic-ui ile yazılmıştır. Kullanıcı üye olduktan sonra giriş yapabilir. Giriş yaptığında token üretilir ve seçili sayfalara erişirken token kullanılabilir. Kullanıcı ürünü sepete attıktan sonra önce state olarak veri tutulur. Sepete ekledikten sonra veri geçici olarak veritabanına kaydedilir. Satın alma işlemi gerçekleştikten sonra veya sepet güncellendiğinde geçici veri sürekli güncellenir. Satın aldıktan sonra ürünler sipariş olarak tüm bilgileri ile kaydedilir ve siparişler bölümünde gösterilir. Önce site tanıtımı ve sonrasında kod tanıtımı olarak hazırlanmıştır. Bölüm bölüm detaylıca resimli olarak nerede ne kullanıldığı açıklanmaktadır.

## Bölüm 1
### Anasayfa
![mainpage1](https://user-images.githubusercontent.com/36435160/179985384-758ce798-1bfa-4c8b-aeac-dabb757bebc5.png)

Turuncu ok işareti ile gösterilen giriş yapmış kullanıcı

Kullanıcı giriş yaptığında oluşturulan token geçici olarak kaydedilir. Kullanıcı bilgisi API ile çekilir. State tanımlanmıştır. useEffect ile kullanıcı verisi çekilir. Kullanıcı ismi gösterilir. Çıkış yapıldığında dispatch ile state verisi güncellenir ve çıkış yapılmış olarak gösterilir.

Kırmızı ok işareti ile gösterilen kategori seçimi

Her bir kategori isim ile tanımlanmıştır. İlgili kategoriye tıklandığında isim bilgisi dispatch ile state tarafına gönderilir. Kategoriler yatay ve dikey olarak state içinde tutulmaktadır. Kullanıcı sayfasına geçildiğinde dikey kategori ve kullanıcıya özel kategoriler belirmektedir.

Mavi ok işareti ile gösterilen resim geçişi

Belirtilen saniyelerde resim geçişi olmaktadır. Aynı zamanda kendimiz tıklayarak resim geçişi sağlayabiliriz. Ürün reklamları burada gösterilmektedir.

Mor ok işareti ile gösterilen ürün veya seçim yapılmış ise kategoriye göre listelenmiş ürün listesi

Sayfa ilk açıldığında tüm ürünlerin listesi API ile çekilmektedir. Tüm sayfa semantic-ui GRID yapısındadır. Her ürünün fotoğrafı, kısa bilgisi, markası, fiyatı yine çekilen API aracılığıyla yazılmaktadır. Kategori değişirse ürün listesi güncellenmektedir. Bir ürüne tıklandığında o ürünün detay sayfasına yönlendirilmektedir.

### Ürün detayı
![s1](https://user-images.githubusercontent.com/36435160/179985405-42ea70b5-f275-4be8-b555-41724fb3fbae.png)

Gri ok işareti ile gösterilen kategori seçimi
Hangi ürünün kategorisinde olduğu bilgisini sırayla kategori, marka, ürün kısa ismi olarak API aracılığıyla çekmektedir.

Yeşil ok işareti ile gösterilen kategori seçimi
Ürünün kısa ismi, ismi, fiyatı ve sepete ekleme butonu burada yer almaktadır. Sepete ekle butonuna basınca ürün bilgisi redux ile state içerisine kaydedilmektedir.Detaylı kod bilgisi aşağıda olacaktır.

Mor ok işareti ile gösterilen kategori seçimi
Aynı kategorideki ürünler burada gösterilmektedir. Kullanıcı tercih ederse kolaylıkla önerilen ürün sayfasına gidebilir. react elastic carousel kullanılmıştır. 

Sarı ok işareti ile gösterilen kategori seçimi
Farklı sekmeler seçilerek ilgilenilen sekmelere bakılabilir. Ürün detayı resimli ve açıklamalı şekilde yer almaktadır. Burası farklı biçimlerde ayarlanabilir.

### Sepet state detayı
![s5](https://user-images.githubusercontent.com/36435160/179985412-df9b4cf5-4a3d-44cd-8fe8-86647bb1aac0.png)

Kırmızı ok işareti ile gösterilen sepet bilgisi
State içerisindeki ürünler burada görülmektedir. 
Mavi ok işareti ile gösterilen sepet bilgisi
Sepette görülen ürünleri almak için sepete git butonuna tıklanmaktadır. Sepete git butonuna tıklanınca veriler geçici olarak veritabanına kaydedilir ve sipariş sayfasına yönlendirilir. Sipariş verildikten sonra geçici veri tekrar sıfırlanacaktır.

### Sepet detayı
![s6](https://user-images.githubusercontent.com/36435160/179985429-51ebff1f-33df-42ac-ae4a-87562b47cb38.png)

Veritabanından gelen geçici sepet bilgisi burada yer almaktadır. Sipariş ver tıkladıktan sonra sepetteki ürünler sipariş olarak kaydedilir ve sepet sıfırlanır.


### Sipariş detayı
![s7](https://user-images.githubusercontent.com/36435160/179985441-d8730ada-d1ac-4873-b075-c49f3e28047c.png)

Kullanıcı siparişler sayfasında kullanıcı tüm siparişlerini ve durumunu görebilir.

### Nav search detayı
![mainpage](https://user-images.githubusercontent.com/36435160/179985444-60df994c-2367-4044-a5c8-0bdbcf31556a.png)
Veritabanından gelen tüm ürünlerin listesi filtreleme yapılarak search alanında gösterilmektedir.


