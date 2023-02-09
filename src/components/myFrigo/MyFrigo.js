import React, {useState} from 'react';
import MyFrigoItems from './MyFrigoItems';
import { useSelector } from 'react-redux';
// Icon Imports 
import {BiFridge} from "react-icons/bi";
import {AiOutlineClose } from "react-icons/ai";

const MyFrigo = () => {
	const [myFrigoOpen, setMyFrigoOpen] = useState(false);
	const myFrigoItems = useSelector((state) => state.myfrigo.productList);
	const quantity = useSelector((state) => state.myfrigo.totalQuantity);

	const closeMyFrigo = () => {
			setMyFrigoOpen(false);
	};
	const openMyFrigo = () => {
			setMyFrigoOpen(true);
	};
	
	return (
		<div className='myFrigo'>
			<div className='myFrigo' onClick={openMyFrigo}>
			<BiFridge className = 'myFrigoIcon'/>
			<span className='flexCenter'>{quantity}</span>
			</div>
			<div className={myFrigoOpen ? "overlay" : "nonoverlay"}>

			</div>
			<div className={myFrigoOpen ? "myFrigoItem" : "myFrigoHide"}>
				<div className='title flex'>
					<h2>MyFrigo</h2>
					<button onClick={closeMyFrigo}>
						<AiOutlineClose className="icon" />                    
					</button>
				</div>
				{myFrigoItems.map((item) => (
					<MyFrigoItems 
						key={item.id}
						id={item.id} 
						productImg={item.productImg} 
						name={item.name} 
						quantity={item.quantity}
					/>
				))}
			</div>
		</div>
	);
}

export default MyFrigo;