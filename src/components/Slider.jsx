import React, { Component } from "react";
import Helpers from "../helpers/Helpers";

class Slider extends Component {
    _onChangeHandler(event) {
        // Validate input
        let value = parseFloat(event.target.value.replace(/,/, "."));

        if( value >= 0 ) {
            value = new Helpers().round(value, 2);

            this.props.onChangeHandler(value);
        }

        return false;
    }

    render() {
        return (
            <div className="slider">
                {this.props.name}
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.01"
                    value={this.props.percent}
                    onChange={this._onChangeHandler.bind(this)}
                />
                <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    value={this.props.percent}
                    onChange={this._onChangeHandler.bind(this)}
                />
            </div>
        );
    }
}

export default Slider;