import React, { Component } from "react";
export default class Section2 extends Component {
    render() {
        return (
        <section className="pizzaPic">
            <img src={this.props.image1} alt='pizzaPIC'/>
        </section>
        )
    }    
}        