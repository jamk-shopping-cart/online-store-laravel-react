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
import Checkout from './Checkout';

// Save/update cart in localstorage:
// Ex: saveToLocalstorage('cart', {1:{...}});
function saveToLocalstorage(name, value) {
    window.localStorage.setItem(name, JSON.stringify(value));
}

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
        const orderId = null;  // after login load order if it exists
        this.setItem = this.setItem.bind(this);
        this.state = { item, count, cart, orderId };
        this.token = window.apiToken;
    }

    setItem(item) {
        // console.log(`app.setItem: ${item.model}`, item);
        this.setState({ item });
        saveToLocalstorage('item', item);
        //window.localStorage.setItem('item', JSON.stringify(item));
    }

    createOrder() {
        return fetch(`/api/orders?api_token=${this.token}`, { method: 'POST' })
            .then(res => res.json())
            .then(result => {
                if (result.isError) {
                    console.log(`Error! Can not create order: ${result.message}`);
                    throw Error(`Server error: ${result.message}`);
                } else {
                    console.log(`Order saved. Response message: ${result.message}`);
                    this.setState({orderId: result.order_id});
                    return result.order_id;
                }
            });
    }

    checkOrderAndAddItemToCart(item, size) {
        if (this.state.orderId == null) {
            this.createOrder()
                .then(() => this.addItemToCart(item, size))
                .catch(err => console.log(`Sorry, error: `, err));
        } else {
            this.addItemToCart(item, size);
        }
    }

    addItemToCart(item, size) {
        if (!this.state.orderId) {
            console.log(`You have to create order first.`);
            return;
        }
        // console.log(`app.addItemToCart: added to cart`);
        const count = this.state.count + 1;
        this.setState({ count });
        this.updateCart(item, size);
        saveToLocalstorage('count', count);
        // window.localStorage.setItem('count', count);
    }

    updateCart(item, size) {
        // console.log('itemToCart size=', size);
        const cart = this.state.cart;
        const minSize = 38;
        const maxSize = 47;
        const itemStored = cart[item.id] || {
            orderItemId: '',
            item,
            count: 0,
            size: isNaN(size) ? Math.round(Math.random() * (maxSize - minSize) + minSize) : size
        };
        itemStored.count++;
        // Cart is an object: {`item.id1`: {orderItemId, item, size, count}, `item.id2`: {orderItemId, item, size, count},... }
        cart[item.id] = itemStored;
        this.setState({ cart });
        saveToLocalstorage('cart', cart);
        // window.localStorage.setItem('cart', JSON.stringify(cart));
        // console.log(`app.updateCart: cart`, cart);
        // console.log(`app.updateCart: itemStored`, itemStored);

        // Prepare to save to DB:
        const orderId = this.state.orderId;
        const data = {
            id: itemStored.orderItemId, // for a new item this `id` will be empty, for existing it will be `orderItemId`.
            order_id: orderId,
            item_id: item.id,
            quantity: itemStored.count,
            size: itemStored.size
        }

        // Create item in DB:
        // fetch(`/api/orders/${orderId}/items/${orderItemId}?api_token=${this.token}`, {...})
        fetch(`/api/orders/${orderId}/items?api_token=${this.token}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(result => {
                // Check errors:
                if (result.isError) {
                    console.log(`Error! Can not save item to DB: ${result.message}`);
                } else {
                    console.log(`Saved item to DB: `, result);
                    const cart = this.state.cart;
                    const cartItem = cart[item.id];
                    // If this was a new item, we save order item id in our cart:
                    if (!cartItem.orderItemId) {
                        cartItem.orderItemId = result.orderItem.id;
                        console.log(`Saving to cart: result.orderItem.id=${result.orderItem.id}, cartItem=, cart=`, cartItem, cart);
                        saveToLocalstorage('cart', cart);
                    }
                }
            })
            //.catch(err => console.log(`Sorry, error: `, err));
    }

    submitOrder(paymentDetails) {
        console.log('Send payment details to server and close the order. paymentDetails:',  );
        // Prepare to save to DB:
        const orderId = this.state.orderId;
        const data = {
            id: orderId,
            name: paymentDetails.name,
            address: paymentDetails.address
        }

        // Create order in DB:
        fetch(`/api/orders?api_token=${this.token}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(result => {
                // Check errors:
                if (result.isError) {
                    console.log(`Error! Can not save item to DB: ${result.message}`);
                } else {
                    console.log(`Saved order to DB: `, result);
                    // If this was a new order, we save order id:
                    if (!orderId) {
                        orderId = result.orderId;
                        console.log(`Saving order: result.orderId=${result.orderId}`);
                        saveToLocalstorage('orderId', orderId);
                    } else {
                    // TODO:existing order completed, then we can clear the cart and orderId:

                    }
                }
            })
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
                    callback={this.checkOrderAndAddItemToCart.bind(this)}
                    count={this.state.count}
                />
                <Route
                    path="/cart"
                    component={ShoppingCart}
                    cart={this.state.cart}
                    size={this.state.size}
                    count={this.state.count}
                />
                <Route path="/checkout"
                    component={Checkout}
                    cart={this.state.cart}
                    callback={this.submitOrder.bind(this)}
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
