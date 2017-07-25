import React from "react";
import ReactDOM from "react-dom";
import ImageContainer from "./containers/image-container";
import "./index.css";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div>
                <ImageContainer/>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.querySelector("#root"));