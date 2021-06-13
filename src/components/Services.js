import React from 'react';
class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "one": 'Mobile App Development',
            "two": 'Web App Development'
        };
    }

    render() {
        return (
            <div>
                <h4>{this.state.one}</h4>
                <h4>{this.state.two}</h4>
            </div>
        );
    }
}

export default Services;