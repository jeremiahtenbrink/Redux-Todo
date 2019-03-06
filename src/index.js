import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

ReactDOM.render( <Provider store={ createStore( reducers ) }> <App />
</Provider>, document.getElementById( "root" ) );
