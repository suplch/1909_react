import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Counter from './components/Counter';
class App extends React.Component {
  render() {
    return (
        <div>
            <Counter name={'zhang'} age={18}/>
            <hr/>
            <ProductList/>
            <Cart/>
        </div>
    );
  }
}
export default App;
