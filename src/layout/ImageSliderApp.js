import ImageSlider from "./ImageSlider";

const ImageSliderApp = () => {
    const slides = [
      { url: "https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/01-01-2021/kamp-web0.jpg", title: "beach" },
      { url: "https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/04-2022/cep-revize-05-07-22-web.jpg", title: "boat" },
      { url: "https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/04-2022/nb-revize-05-07-22-web.jpg", title: "forest" },
      { url: "https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/04-2022/tv-revize-05-07-22-web.jpg", title: "city" },
      { url: "https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/04-2022/utu-revize-05-07-22-web.jpg", title: "italy" },
    ];
    const containerStyles = {
      width: "100%",
      height: "350px",
      margin: "0 auto",
    };
    return (
      <div>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
    );
  };
  
  export default ImageSliderApp;