import './App.css';
import { Animals } from '../data';
import { Animal } from '../animal/animal';
import { Cart } from '../cart/cart';
import { useState } from 'react';
function App() {
  const [cart, setCart] = useState([...Animals])
  const AnimalList = Animals.map((el)=>{
    return ( <Animal ani={el} ca={setCart}></Animal>)
  })
  return (
    <div className="App">
        <div className='banner'>
          <h4>Animal Shop</h4>
        </div>
        <div className='container'>
          <div className='left'>
            {AnimalList}
          </div>
          <div className='right'>
                <h2>Koszyk</h2>
                <p></p>
                <Cart item={cart}></Cart>
          </div>
        </div>
    </div>
  );
}

export default App;
