import React, { Component } from "react";

class Result extends Component {
    render() {
        return (
            <div className="result">
                Результат:
                {this.props.items.map( item => (
                    <div key={item.Name}>{item.Name}: {item.Percent}</div>
                ))}
            </div>
        );
    }
}

export default Result;