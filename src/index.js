import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { searchItems } from './reducers'
import Main from "./components/Main";
import "./index.css";
import 'tachyons';

const store = createStore(searchItems);
 
ReactDOM.render(
	<Provider store={store}>
    	<Main />
  	</Provider>,
	document.getElementById("root")
);