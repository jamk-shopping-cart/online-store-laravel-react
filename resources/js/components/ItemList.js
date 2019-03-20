import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, isLoaded: false, items: [] };
    }

    componentDidMount() {
        // fetch('https://5bf089690756d2001311987d.mockapi.io/shoes')
        fetch('/api/collection')
            .then(res => res.json())
            .then(
                result => {
                    console.log('result:', result);
                    this.setState({ isLoaded: true, items: result });
                },
                error => {
                    this.setState({ isLoaded: true, error });
                }
            );
    }

    render() {
        const callback = this.props.callback;
        // console.log('ItemList: typeof callback ' + typeof callback, this.props);
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map((item, index) => (
                        <li key={item.id}>
                            <Item key={index} item={item} callback={callback} />
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default ItemList;
