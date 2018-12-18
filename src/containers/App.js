import React from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
// import './App.css';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  }
};

class App extends React.Component {
	constructor() {
		super();
		// this.url = url;
		this.state = {
			swObjects: []
		};
	};
	
	async componentDidMount() {
		try {
			const response = await fetch(this.props.url);
			if (!response.ok) {
				throw Error(response.statusText);
			}
    	    const objs = await response.json();
    	    this.setState({ swObjects: objs.results });
    	} catch (error) {
    		console.log(error);
    	}
  	}

	render() {
		const { swObjects } = this.state;
		const { searchField, onSearchChange, type } = this.props;
		const filteredSWObjects = swObjects.filter(swobject => {
			return !(type === 'films') ?
				swobject.name.toLowerCase().includes(searchField.toLowerCase()) :
				swobject.title.toLowerCase().includes(searchField.toLowerCase());
		});
  		return !swObjects.length ?
  			<h3 className='yellow'>Loading..</h3> :
			(<div className='tc'>
				<SearchBox searchChange={onSearchChange}/>
				<CardList swobjects={filteredSWObjects} type={type}/>
			</div>
			);
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
