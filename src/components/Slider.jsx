import React, { Component } from "react";

class Slider extends Component {
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
                    onChange={this.props.onChangeHandler}
                />
                <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    value={this.props.percent}
                    onChange={this.props.onChangeHandler}
                />
            </div>
        );
    }
}

export default Slider;