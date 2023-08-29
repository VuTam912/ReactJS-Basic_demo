import React, { Component } from 'react';
import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';

// Link khong the su dung style
// NavLink cho phep su dung style

class Nav extends Component {
	render() {
		return (
			<div className='topnav'>
				{/* <Link to="/" <= giup chuyen menu ma ko can phai load page lai */}
				<NavLink to='/' activeClassName='active' exact={true}>
					Home
				</NavLink>
				<NavLink to='/todo' activeClassName='active'>
					Tobos
				</NavLink>
				<NavLink to='/about' activeClassName='active'>
					About
				</NavLink>
				<NavLink to='/user' activeClassName='active'>
					Users
				</NavLink>
			</div>
		);
	}
}

export default Nav;
