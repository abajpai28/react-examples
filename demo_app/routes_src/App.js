import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const Home = () => <h1> Hello World <Links /></h1>
const About = () => <h1> It"'"s  all about me.<Links />  </h1>
const Contact= () => <h1> Its all about contact <Links /></h1>

const Links = () =>
	<nav>
		<Link activeStyle={{color:'green'}} to="/"> Home </Link>
		<Link activeStyle={{color:'green'}} to="/about"> About </Link>
		<Link activeClassName="active" to="/contact"> Contact </Link>
	</nav>


 
class App extends React.Component{
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Home}> </Route>
				<Route path="/about" component={About}> </Route>
				<Route path="/contact" component={Contact}> </Route>
			</Router>

		);
	}
}
export default App; 