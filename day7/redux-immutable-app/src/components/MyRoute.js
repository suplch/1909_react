import React from 'react';

export class MyRoute extends React.Component{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.hashChange = () => {
            console.log('hash change')
            this.forceUpdate();
        };
        window.addEventListener('hashchange', this.hashChange)
    }

    render() {
        const path = this.props.path;
        const Component = this.props.component;
        console.log(path);
        console.log('my route', this.props)
        let comp;
        console.log(window.location.hash);
        console.log('#' + path)

        if (window.location.hash === '#' + path) {
            comp = <Component></Component>
        }
        return (
            <div>
                {comp}
            </div>
        )
    }
    componentWillUnmount() {
        window.removeEventListener('hashchange', this.hashChange);
        delete this.hashChange;
    }
}
