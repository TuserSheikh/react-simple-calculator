import React, { Component } from "react";
import Calculator from "./components/Calulator";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Calculator />
            </div>
        );
    }
}

export default App;
