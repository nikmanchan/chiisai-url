import React, { Component } from "react";

class TinyURL extends Component {
    state = {
        originalURL: "",
    }

    render() {
        return (
            <div>
                <h1>URLs</h1>
                <form>
                    <input type="url" value={this.state.originalURL}></input>
                    <button>Create URL</button>
                </form>
            </div>
        );
    }
}

export default TinyURL;