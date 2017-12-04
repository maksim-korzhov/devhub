import React, { Component } from "react";
import Slider from "./Slider";
import Result from "./Result";
import Helpers from "../helpers/Helpers";

class SliderList extends Component {
    constructor(props) {
        super(props);

        let items = [{"Name": "Item 1","Percent": 100}];

        for( let i = 2; i <= this.props.sliders; i++ ) {
            items.push({"Name": `Item ${i}`,"Percent": 0});
        }

        this.state = {
            items
        };
    }

    _onChangeHandler(index, value) {
        let order = "min";
        const items = [...this.state.items];
        let total = parseFloat((items[index].Percent - value).toFixed(2)); // percents left

        if( items[index].Percent < value ) {
            order = "max";
        }

        // Set percents for current slider
        items[index].Percent = value;

        // Create array with all values
        const valuesArr = [];


        // If first element's percent is 0, use it
        for (let i = 0; i < items.length; i++) {
            if (i === index) continue;

            valuesArr.push(parseFloat(items[i].Percent));
        }

        if( valuesArr.length > 0 ) {
            // Get min or max value
            let currentValue = 0;
            if (order === "min") {
                currentValue = Math.min(...valuesArr);
            } else {
                currentValue = Math.max(...valuesArr);
            }

            // Get indexes of elements with min or max value
            let currentIndex;
            for (let i in items) {
                if (items[i].Percent == currentValue) {
                    currentIndex = i;
                }
            }

            // Inc or decr percents
            let newPercent = items[currentIndex].Percent;
            newPercent += total;

            newPercent = newPercent < 0 ? 0 : newPercent;
            newPercent = newPercent > 100 ? 100 : newPercent;
            newPercent = parseFloat(newPercent.toFixed(2));
            items[currentIndex].Percent = newPercent;

            // Correct the data
            let correctedValue = 100.00;
            for( let i in items ) {
                correctedValue -= items[i].Percent;
            }

            items[index].Percent = new Helpers().round(items[index].Percent + correctedValue, 2);
        }

        this.setState({
            items
        });
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