import React, { Component } from "react";
import SliderList from "./SliderList";

class Tab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 1
        };
    }

    _onClickHandler(e) {
        this.setState({
            current: parseInt(e.target.dataset.id)
        });
    }

    render() {
        return (
            <div className="tab">
                <div className="button-group" onClick={this._onClickHandler.bind(this)}>
                    <button data-id="1">Один элемент</button>
                    <button data-id="2">Два элемента</button>
                    <button data-id="3">Три элемента</button>
                    <button data-id="4">Четыре элемента</button>
                    <button data-id="5">Пять элементов</button>
                </div>

                <SliderList id="1" sliders="1" isActive={this.state.current === 1} />
                <SliderList id="2" sliders="2" isActive={this.state.current === 2} />
                <SliderList id="3" sliders="3" isActive={this.state.current === 3} />
                <SliderList id="4" sliders="4" isActive={this.state.current === 4} />
                <SliderList id="5" sliders="5" isActive={this.state.current === 5} />
            </div>
        );
    }
}

export default Tab;