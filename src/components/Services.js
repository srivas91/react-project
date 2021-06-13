import React from 'react';
import './Services.css';
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
            Services Offered:
            <ol>
                <li>{this.state.one}</li>
                <li>{this.state.two}</li>
                </ol>
            </div>
        );
    }
}

export default Services;