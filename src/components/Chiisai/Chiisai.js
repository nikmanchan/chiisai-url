import React, { Component } from "react";
import { connect } from 'react-redux';

class Chiisai extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: "REDIRECT_TINY_URL",
        });
    }

    render() {
        return (
            <div>
                <h1>Chiisai!</h1>

            </div>
        );
    }
}

export default connect()(Chiisai);