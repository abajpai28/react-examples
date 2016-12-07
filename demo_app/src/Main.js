import React from 'react';

class Main extends React.Component{
	render(){
		return (
			<div className="container">
				<NavComponent />
				<ContainerComponent />
			</div>
		);
	}
}


const NavComponent = () => 
	<nav className='navbar navbar-inverse navbar-fixed-top'>
      	<div className='container'>
	        <div className='navbar-header'>
	        	<button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
        			<span className='sr-only'>Toggle navigation</span>
		            <span className='icon-bar'></span>
		            <span className='icon-bar'></span>
		            <span className='icon-bar'></span>
      			</button>
		        <a className='navbar-brand' href='#'>Project name</a>
    		</div>
	        <div id='navbar' className='collapse navbar-collapse'>
	         	<ul className='nav navbar-nav'>
		            <li className='active'><a href='#'>Home</a></li>
		            <li><a href='#about'>About</a></li>
		            <li><a href='#contact'>Contact</a></li>
		        </ul>
	        </div>
      	</div>
	</nav>

class ContainerComponent extends React.Component{
	render(){
		return (
			<div className='starter-template'>
				<div className="col-md-6">
					<h1> Bootstrap starter template1 </h1>
				</div>
				<div className="col-md-6">
					<LoginComponent />
				</div>
			</div>
		);
	}
}

class LoginComponent extends React.Component{

	constructor (){
		super();
		this.state
	}

	__handleSubmit (){

	}

	__validateEmail(){

	}

	__validatePassword(){

	}

	render(){
		return(
			<div>
				<span className="glyphicon glyphicon-btc"> </span>
				<h2> Welcome to DemoApp, why to miss your searched page url </h2>
				<form className="form-horizontal">
		        	<div className="form-group">
			        	<input type="email" className="form-control" placeholder="Email address" />
					</div>			        	
					<div className="form-group">
			        	<input type="password" className="form-control" placeholder="Password"/>
					</div>			        	
		        	<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
		        	<a href="#/sign-up"> Sing up</a> <span> | </span>
		        	<a href="#/forgot-password"> Forgot Password</a>
		     	</form>
			</div>
		);
	}
}

LoginComponent.propTypes = {

	email: React.propTypes.email.isRequired,
	password: React.propTypes.password.isRequired

}

export default Main;