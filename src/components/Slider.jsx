import React, { Component } from "react";

class Slider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slider">
                Item 1
                <input type="range" />
                <input type="number" />
            </div>
        );
    }
}

export default Slider;