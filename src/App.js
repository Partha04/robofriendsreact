import React,{Component}from 'react';
import {robots} from './robots';
import CardList from './CardList';
import Search from './Search';
import './App.css';
import Scroll from './Scroll';

const state={
	robots:robots,
	searchfeild:''
}


class App extends Component{
	constructor(){
		super();
		this.state=
		{ 
			robots:[],
			searchfeild:''

		};
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users').then(Response=>Response.json()).
		then(user=>{this.setState({robots:user})})	;
	}

	onSearchChange=(event)=>{
		this.setState({searchfeild:event.target.value});
		
		
	}

	render(){
		const possibleRobots=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
		});

		return(<div className='tc'>
		<h1>Robofriends</h1>
		<Search  SearchChange={this.onSearchChange}/>
		<br></br>
		<Scroll><CardList robots={possibleRobots}/></Scroll>
		</div>
		)
	}
	
}
export default App;