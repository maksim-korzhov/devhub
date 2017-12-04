import React, { Component } from "react";
import Helpers from "../helpers/Helpers";

class Result extends Component {
    render() {
        return (
            <div className="result">
                <strong>Результат:</strong>
                {this.props.items.map( item => {
                    const value = new Helpers().round(item.Percent, 2);
                    return <div key={item.Name}>{item.Name}: {value}%</div>;
                })}
            </div>
        );
    }
}

export default Result;