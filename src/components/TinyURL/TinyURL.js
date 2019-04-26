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
            </div>
        );
    }
}

export default TinyURL;