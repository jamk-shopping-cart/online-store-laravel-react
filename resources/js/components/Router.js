import React, { Component } from 'react';
import PropTypes from 'prop-types';

let instances = [];
const register = comp => instances.push(comp);
const unregister = comp => instances.splice(instances.indexOf(comp), 1);

const historyPush = path => {
    window.history.pushState({}, null, path);
    instances.forEach(instance => instance.forceUpdate());
};

const historyReplace = path => {
    window.history.replaceState({}, null, path);
    instances.forEach(instance => instance.forceUpdate());
};

export class Link extends Component {
    constructor(props) {
        super(props);
        this.handleClick = event => {
            const { replace, to } = this.props;
            event.preventDefault();
            replace ? historyReplace(to) : historyPush(to);
        };
    }

    render() {
        const { to, children } = this.props;
        return (
            <a href={to} onClick={this.handleClick}>
                {children}
            </a>
        );
    }
}

export class Route extends Component {
    constructor(props) {
        super(props);
        this.handlePop = () => {
            this.forceUpdate();
        };
    }
    componentWillMount() {
        window.addEventListener('popstate', this.handlePop);
        register(this);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.handlePop);
        unregister(this);
    }

    render() {
        const { path, exact, component, render, callback, item, count, cart } = this.props;
        const match = matchPath(window.location.pathname, { path, exact });
        if (!match) return null;
        else if (component) return React.createElement(component, { match, callback, item, count, cart });
        else if (render) return render({ match });
        return null;
    }
}

Route.propTypes = {
    path: PropTypes.string,
    exact: PropTypes.bool,
    component: PropTypes.func,
    render: PropTypes.func
};

const matchPath = (pathname, options) => {
    const { exact = false, path } = options;
    if (!path) {
        return {
            path: null,
            url: pathname,
            isExact: true
        };
    }

    const match = new RegExp(`${path}$`).exec(pathname);
    if (!match) {
        return null;
    }

    const url = match[0];
    const isExact = pathname === url;
    if (exact && !isExact) {
        return null;
    }
    return {
        path,
        url,
        isExact
    };
};

Link.propTypes = {
    to: PropTypes.string.isRequired,
    replace: PropTypes.bool
};
