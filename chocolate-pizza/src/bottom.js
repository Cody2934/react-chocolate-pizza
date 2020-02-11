import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
        <div>
            <footer> 
                <img src={this.props.image2} alt="girl"/>
                <h3>Vanessa Stevenson</h3>
                <p></p>
            </footer>
        </div>
        )
    }
}