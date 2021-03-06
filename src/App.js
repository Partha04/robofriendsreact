import React,{Component}from 'react';
import {robots} from './robots';
import CardList from './CardList';
import Search from './Search';
import './App.css';

const state={
	robots:robots,
	searchfeild:''
}


class App extends Component{
	constructor(){
		super();
		this.state=
		{ 
			robots:robots,
			searchfeild:''

		};
	}

	onSearchChange=(event)=>{
		this.setState({searchfeild:event.target.value});
		
		
	}

	render(){
		const possibleRobots=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
		});

		return(<div className='tc'>
		<h1>Robofriends</h1>
		<Search  SearchChange={this.onSearchChange}/>
		<CardList robots={possibleRobots}/>
		</div>
		)
	}
	
}
export default App;