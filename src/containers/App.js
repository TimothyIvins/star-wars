import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
// import './App.css';


class App extends React.Component {
	constructor() {
		super();
		// this.url = url;
		this.state = {
			swObjects: [],
			searchField: ''
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

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};
	
	render() {
		const { swObjects, searchField } = this.state;
		const filteredSWObjects = swObjects.filter(swobject => {
			return !(this.props.type === 'films') ?
				swobject.name.toLowerCase().includes(searchField.toLowerCase()) :
				swobject.title.toLowerCase().includes(searchField.toLowerCase());
		});
  		return !swObjects.length ?
  			<h3 className='yellow'>Loading..</h3> :
			(<div className='tc'>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList swobjects={filteredSWObjects} type={this.props.type}/>
			</div>
			);
	}
};

export default App;
