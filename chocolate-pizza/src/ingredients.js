import React, { Component } from "react";
export default class Section4 extends Component {
    render() {console.log(this.props)
        return (
        <ul className="ingredients">
            <img src="list-bg.png"/>
            <li>{this.props.mixers1}</li>
            <li>{this.props.mixers2}</li>
            <li>{this.props.mixers3}</li>
            <li>{this.props.mixers4}</li>
            <li>{this.props.mixers5}</li>
            <li>{this.props.bob}</li>
            <li></li>
        </ul>
        )
    }    
}        