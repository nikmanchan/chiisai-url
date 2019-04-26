import React, { Component } from "react";

class TinyURL extends Component {
    state = {
        originalURL: "",
    }

    handleInputChange = propertyName => event => {
        this.setState({
            [propertyName]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <h1>URLs</h1>
                <form>
                    <input type="url" value={this.state.originalURL} onChange={this.handleInputChange('originalURL')}></input>
                    <button>Create URL</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Origing URL</th>
                            <th>Tiny URL</th>
                            <th>Hit Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* setup to map through standard data cells with url data stored in redux state */}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TinyURL;