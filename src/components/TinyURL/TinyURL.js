import React, { Component } from "react";

class TinyURL extends Component {
    state = {
        originalURL: "",
        showErrorMessage: false,
    }

    handleInputChange = propertyName => event => {
        this.setState({
            [propertyName]: event.target.value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.validateURL(this.state.originalURL)
        // console.log("URL submitted!");
    }

    validateURL = (userInput) => {
        // use .test and regex to check if http or https is within the string
        let oldURL = userInput;
        let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if(regexp.test(oldURL)){
            this.setState({
                showErrorMessage: false
            })
            console.log("matches!");
        }else {
            this.setState({
                showErrorMessage: true
            })
            console.log("not matches");

        }
    }

    render() {
        return (
            <div>
                <h1>URLs</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input required value={this.state.originalURL} onChange={this.handleInputChange('originalURL')}></input>
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