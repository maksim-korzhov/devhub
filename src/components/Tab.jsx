import React, { Component } from "react";
import SliderList from "./SliderList";

class Tab extends Component {
    render() {
        return (
            <div className="tab">
                <SliderList sliders="1" />
                <hr/>
                <SliderList sliders="2" />
                <hr/>
                <SliderList sliders="3" />
                <hr/>
                <SliderList sliders="4" />
                <hr/>
                <SliderList sliders="5" />
            </div>
        );
    }
}

export default Tab;