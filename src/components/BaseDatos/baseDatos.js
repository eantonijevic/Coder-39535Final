
import {db} from '../../config/Config';
import {collection, getDocs} from 'firebase/firestore';


import whiteopal from '../../assets/productos/philips.jpeg';
import whitepearl from '../../assets/productos/crompton2.jpeg';
import warmwhite from '../../assets/productos/philips2.jpg';
import warmwhiteopal from '../../assets/productos/philips3.jpeg';
import coolwhite from '../../assets/productos/crompton3.jpeg'
import warmwhiteclear from '../../assets/productos/crompton.jpeg';


//export const arregloProductos = [
    //{id:1, title: "Philips LED GLS 11W B22 CorePro Warm White Opal", price: 30, pictureUrl: whiteopal, categoria:"philips"},
    //{id:2, title: "Crompton Lamps LED Candle 5W E14 Dimmable Filament Warm White Pearl (40W Eqv)", price: 40, pictureUrl: whitepearl, categoria:"dimmable"},
    //{id:3, title: "Philips LED MR16 Spotlight 5.8W GU5.3 12V Dimmable Master Value LEDspot Warm White 36°", price: 60, pictureUrl: warmwhite, categoria:"dimmable"},
    //{id:4, title: "Philips LED GLS 13W B22 CorePro Warm White Opal", price: 60, pictureUrl: warmwhiteopal, categoria:"philips"},
    //{id:5, title: "Crompton Lamps LED GU10 Spotlight 5W Cool White 38° (50W Eqv)", price: 80, pictureUrl: coolwhite, categoria:"crompton"},
    //{id:6, title: "Crompton Lamps LED Candle 5W E14 Dimmable Filament Warm White Clear (40W Eqv)", price: 60, pictureUrl: warmwhiteclear, categoria:"dimmable"}]

export const arregloProductos = async () => {
    const productos = await getDocs(collection(db,"Products"))
    const items = productos.docs.map(prod => {
      return {...prod.data(),id: prod.id}
    })
    return items
  }