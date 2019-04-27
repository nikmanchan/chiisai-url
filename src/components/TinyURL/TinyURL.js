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

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("URL submitted!");
        
    }

    render() {
        return (
            <div>
                <h1>URLs</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="url" required value={this.state.originalURL} onChange={this.handleInputChange('originalURL')}></input>
                    <button value="submit" type="submit">Create URL</button>
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