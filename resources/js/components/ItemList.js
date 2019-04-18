import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, isLoaded: false, items: [] };
        this.page = 1;
        this.hasNext = true;
        this.hasPrev = false;

        this.showNext = event => {
            event.preventDefault();
            if (this.page === this.state.lastPage) {
                console.log('Last page=' + this.state.lastPage)
                return;
            }
            else {
                this.page += 1;
                this.loadPage();
            }
            console.log('Next page=' + this.page)
        };
        this.showPrev = event => {
            event.preventDefault();
            if (this.page <= 1) {
                return;
            }
            else {
                this.page -= 1;
                this.loadPage();
            }
            console.log('Prev page=' + this.page);
            if (this.page === 1) {
                this.hasPrev = false;
            }
            else {
                this.hasPrev = true;
            }
        };
    }

    loadPage() {
        // concatenation:  'hello ' + variable + '!'
        // interpolation:  `hello ${variable}!`
        fetch(`/api/collection?page=${this.page}`)
            .then(res => res.json())
            .then(
                result => {
                    console.log('result:', result);
                    this.setState({ isLoaded: true, items: result.data, lastPage: result.last_page });
                    console.log('this.state.items' + this.state.items)
                },
                error => {
                    this.setState({ isLoaded: true, error });
                }
            );
    }

    componentDidMount() {
        // fetch('https://5bf089690756d2001311987d.mockapi.io/shoes')
        this.loadPage();
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
                <div>
                    <ul>
                        {items.map((item, index) => (
                            <li key={item.id}>
                                <Item key={index} item={item} callback={callback} />
                            </li>
                        ))}
                    </ul>
                    {/* {this.hasPrev && <button onClick={this.showPrev}>Previous</button>} */}
                    <button onClick={this.showPrev} style={{ opacity: (this.hasPrev ? '30%' : '80%') }}>Previous</button>
                    {this.hasNext && <button onClick={this.showNext}>Next</button>}
                </div>
            );
        }
    }
}

export default ItemList;
