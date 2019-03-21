// import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'roboto-fontface';
import 'animate.css/animate.css';
import 'react-dropdown/style.css';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Route } from './Router';
import StartPage from './StartPage';
import Registration from './Registration';
import Collection from './Collection';
import ItemInfo from './ItemInfo';
import SignIn from './SignIn';
import ShoppingCart from './ShoppingCart';

class App extends Component {
    constructor(props) {
        // console.log('item: ' + window.localStorage.getItem('item'));
        // console.log('count: ' + window.localStorage.getItem('count'));
        window.localStorage.clear();
        super(props);
        if (window.localStorage) {
            // console.log('Local Storage is available');
        } else {
            window.alert('Local Storage is not available');
        }
        const count = Number(window.localStorage.getItem('count') || 0);
        const item = JSON.parse(window.localStorage.getItem('item') || 'null');
        const cart = JSON.parse(window.localStorage.getItem('cart') || '{}');
        this.setItem = this.setItem.bind(this);
        this.state = { item, count, cart };
    }

    setItem(item) {
        // console.log(`app.setItem: ${item.model}`, item);
        this.setState({ item });
        window.localStorage.setItem('item', JSON.stringify(item));
    }

    addItemToCart(item, size) {
        // console.log(`app.addItemToCart: added to cart`);
        const count = this.state.count + 1;
        this.setState({ count });
        this.updateCart(item, size);
        window.localStorage.setItem('count', count);
    }

    updateCart(item, size) {
        // console.log('itemToCart size=', size);
        const cart = this.state.cart;
        const minSize = 38;
        const maxSize = 47;
        const itemStored = cart[item.id] || {
            item,
            count: 0,
            size: isNaN(size) ? Math.round(Math.random() * (maxSize - minSize) + minSize) : size
        };
        itemStored.count++;
        cart[item.id] = itemStored;
        this.setState({ cart });
        window.localStorage.setItem('cart', JSON.stringify(cart));
        // console.log(`app.updateCart: cart`, cart);
        // console.log(`app.updateCart: itemStored`, itemStored);
    }

    render() {
        return (
            <div>
                <Route path="/home" component={StartPage} />
                <Route path="/signin" component={SignIn} />
                <Route path="/registration" component={Registration} count={this.state.count} />
                <Route
                    path="/collection"
                    component={Collection}
                    callback={this.setItem.bind(this)}
                    count={this.state.count}
                />
                <Route
                    path="/iteminfo"
                    component={ItemInfo}
                    item={this.state.item}
                    callback={this.addItemToCart.bind(this)}
                    count={this.state.count}
                />
                <Route
                    path="/cart"
                    component={ShoppingCart}
                    cart={this.state.cart}
                    size={this.state.size}
                    count={this.state.count}
                />
            </div>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
// serviceWorker.unregister();

// App <- Route (callback) <- Collection (callback) <- ItemList (callback) <- Item (callback)
// App -> Route (item) -> ItemInfo (item)

// App <- Route (callback) <- ItemInfo (callback)
// App -> Route (count) -> ItemInfo (count) -> Navigation (count) -> Counter (count)

// App -> Route (cart) -> ShoppingCart (cart)

// App <- Route (callback) <- ItemInfo (callback) <- DropList (callback)
// App -> Route (size) -> ShoppingCart (size)
