import React from 'react';
import Main from '../src/Main.js';
import ContactList from '../src/ContactList.js';
import { Route, Link } from 'react-router';

module.exports = (

	<Route path="/" component={Main}> 
		<Route path="/sign-up" component={ContactList}> </Route>
		<Route path="/forgot-password" component={ContactList}> </Route>
	</Route>
);