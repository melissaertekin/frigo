import React from 'react';
import "./header.css";
import { Link } from "react-router-dom";
import MyFrigo from '../myFrigo/MyFrigo';
import User from './User';
import Favorites from '../recipe/Favorites';

const Header = () => {
	window.addEventListener("scroll",function() {
			const header = this.document.querySelector(".header");
			header.classList.toggle("active",this.window.scrollY > 100)
	})
	window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});

	return (
		<header className='header'>
			<div className='scontainer flex'>
				<div className='logo'>
					<Link to='/'>
							<h1>Frigo</h1>
					</Link>
				</div>
				<div className='account flexCenter'>
					<Favorites />
					<MyFrigo/>
					<User/>
				</div>
			</div>
		</header>
	);
}
export default Header;