import React, { Component } from "react";
import Slider from "./Slider";
import Result from "./Result";

class SliderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {"Name":"Item 1","Percent":0}
            ]
        };
    }

    _onChangeHandler(index, event) {
        // If there is only 1 slider - just set percent value from inputs
        if( this.state.items.length === 1 ) {
            const items = [...this.state.items];
            items[index].Percent = event.target.value;

            this.setState({
                items
            });
        }
    }

    render() {
        return (
            <div className="slider-list">
                {this.state.items.map( (item, i) =>
                    <Slider
                        key={i}
                        name={item.Name}
                        percent={item.Percent}
                        onChangeHandler={this._onChangeHandler.bind(this, i)} /> )
                }
                <Result items={this.state.items} />
            </div>
        );
    }
}

export default SliderList;