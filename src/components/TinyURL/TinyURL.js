import React, { Component } from "react";
import { connect } from 'react-redux';

class TinyURL extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_URL_DATA'
        })
    }

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
    }

    validateURL = (userInput) => {
        // use .test and regex to validate that the string is a URL
        let longURL = userInput;
        let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(longURL)) {
            this.setState({
                showErrorMessage: false
            })
            this.props.dispatch({
                type: 'SEND_URL_DATA',
                payload: {
                    originalURL: this.state.originalURL,
                }
            })
            console.log("URL valid!!");
            // clear originalURL if URL is valid and sent
            this.setState({
                originalURL: ''
            })
        } else {
            this.setState({
                showErrorMessage: true
            })
            console.log("URL invalid!");
        }
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="secondaryContainer">
                    <div className="headerContainer">
                        <h1>URLs</h1>
                        <button
                            onClick={() => this.props.dispatch({ type: 'LOGOUT' })}
                        >
                            Sign Out
                        </button>
                    </div>
                    <form onSubmit={this.handleFormSubmit}>
                        <input required value={this.state.originalURL} onChange={this.handleInputChange('originalURL')}></input>
                        {this.state.showErrorMessage === true && <p>Error: Long URL is not a valid URL</p>}
                        <button value="submit" type="submit">Create URL</button>
                    </form>
                    <table>
                        <thead>
                            <tr>
                                <th>Original URL</th>
                                <th>Tiny URL</th>
                                <th>Hit Count</th>
                            </tr>
                        </thead>
                        {this.props.urlData.length > 0 &&
                            <tbody>
                                {/* setup to map through standard data cells with url data stored in redux state */}
                                {this.props.urlData.map((url, index) =>
                                    <tr key={index}>
                                        <td>
                                            <p>{url.original_URL}</p>
                                        </td>
                                        <td>
                                            <a href={`https://chiisai.herokuapp.com/chiisai/${url.id}`} rel="noopener noreferrer" target="_blank">
                                                https://chiisai.herokuapp.com/chiisai/{url.id}
                                            </a>
                                        </td>
                                        <td>{url.hit_count}</td>
                                    </tr>
                                )}
                            </tbody>}
                    </table>
                </div>
            </div>
        );
    }
}

// Instead of taking everything from state, we just want the URL data.
const mapStateToProps = state => ({
    urlData: state.urlData,
});

export default connect(mapStateToProps)(TinyURL);