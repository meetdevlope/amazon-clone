import React from 'react';
import Item from './Item';

function Products() {
  const productList = [
    {
      image:"https://m.media-amazon.com/images/I/81TjRLHaz1L._SX679_.jpg",
          title:"Samsung IPS, Bezel Less, Flat, Flicker Free 1920 x 1080 Pixels LED Monitor-(Dark Blue Gray, 60.4 cm, 75 Hz) LF24T350FHWXXL",
          rating:4,
          price:"150$",
          discount:"38%",
          saving:"50$",
    },
    {
      image:"https://m.media-amazon.com/images/I/61yMogr0zSL._AC_UL640_FMwebp_QL65_.jpg",
      title:"Titan Smart 2 Smartwatch with Aluminum Body with 1.78 Amoled Display, Upto 7 Days Battery Life, Multi-Sport Modes, SpO2",
      rating:1,
      price:"150$",
      discount:"15%",
      saving:"50$"},
      
    {
      image:"https://m.media-amazon.com/images/I/81p+EkIvUUL._SX679_.jpg",
      title:"Redmi 9A Sport (Metallic Blue, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
      rating:4,
      price:"100$",
      discount:"22%",
      saving:"10$"}      ,
    
    {
      image:"https://m.media-amazon.com/images/I/619n6kxuGsL._SX679_.jpg",
      title:"OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)",
      rating:2,
      price:"400$",
      discount:"18%",
      saving:"28$"},
      
    {
      image:"https://m.media-amazon.com/images/I/51HBom8xz7L._SX679_.jpg",
      title:"boAt Airdopes 141 42H Playtime, Beast Mode ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance, Smooth Touch Controls Bluetooth Truly Wireless",
      rating:2,
      price:"29$",
      discount:"8%",
      saving:"5$"},

    {
      image:"https://m.media-amazon.com/images/I/51hbo8yQ1EL._SX679_.jpg",
      title:"Samsung IPS, Bezel Less, Flat, Flicker Free 1920 x 1080 Pixels LED Monitor-(Dark Blue Gray, 60.4 cm, 75 Hz) LF24T350FHWXXL",
      rating:4,
      price:"730$",
      discount:"28%",
      saving:"55$"},
  
    {
      image:"https://m.media-amazon.com/images/I/81vXk327hOL._SX679_.jpg",
      title:"HP 15s- Ryzen 5- 8GB RAM/512GB SSD 15.6 Inches FHD, Micro-Edge, Anti-Glare Display (Natural Silver/AMD Radeon Graphics/Alexa",
      rating:2,
      price:"800$",
      discount:"30%",
      saving:"60$"},
      
    {
      image:"https://m.media-amazon.com/images/I/71Q7VeAsGRL._SX679_.jpg",
      title:"Ajanta Abstract Metal Quartz Wall Clock (32 cm x 32 cm x 3.5 cm, White) Ajanta Abstract Metal Quartz Wall Clock (32 cm x 32 cm x 3.5 cm, White)",
      rating:3,
      price:"80$",
      discount:"5%",
      saving:"8$"},

    {
      image:"https://m.media-amazon.com/images/I/613a-3jtieL._AC_UY436_FMwebp_QL65_.jpg",
      title:"Logitech MX Master 3 Wireless Mouse, Ultrafast Scrolling, Use on Any Surface, Ergonomic, 4000 Dpi, Customisation, USB-C, Bluetooth/USB, Apple Mac iPad OS",
      rating:5,
      price:"119$",
      discount:"30%",
      saving:"10$"},
    {
      image:"https://m.media-amazon.com/images/I/51EOuSrEfGL._SX679_.jpg",
      title:"JBL Tune 500BT by HarmanPowerful Bass Wireless On-Ear Headphones with Mic, 16 Hours Playtime & Multi Connect Connectivity (White)",
      rating:4,
      price:"80$",
      discount:"30%",
      saving:"10$"},
      
    {
      image:"https://m.media-amazon.com/images/I/71ghHm8ABpL._SX679_.jpg",
      title:"HP 230 Wireless Keyboard with 12 Function Keys, 16 Month Life Battery, 2.4GHz Wireless Connection Up to 32.8ft / 3 Years Warranty (3L1E7AA), Black",
      rating:3,
      price:"20$",
      discount:"5%",
      saving:"$"},

    {
      image:"https://m.media-amazon.com/images/I/61fn8RvdENL._SX679_.jpg",
      title:"Fire-Boltt India's No 1 Smartwatch Brand Incredible 1.3 AMOLED 360X360 Pixel Resolution Smartwatch with Real Time SpO2, Heart Rate Tracking, 100+ Cloud Faces & 28 Sports Mode, Inbuilt Games, Black",
      rating:5,
      price:"69$",
      discount:"10%",
      saving:"5$"},
  ]
  return (
    <div className="products-container flex flex-col items-center gap-8 z-100 relative mx-9 pb-9 md:mx-4 md:gap-4">
      <div className="mxwd flex justify-center flex-wrap gap-8 md:gap-4">
        {
          productList.map((product) => {
            console.log(product.title);
          return ( <Item
            // key={product.title}
          image={product.image}
          title={product.title}
          rating={product.rating}
          price={product.price}
          discount={product.discount}
          saving={product.saving} />
          )
          })
        }
        

        
     
      </div> 
    </div>
  );
}

export default Products;
