import React from 'react';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { myFrigoActions } from '../../store/myFrigoSlice';

const MyFrigoItems = ({id,productImg,name, quantity}) => {
	const dispatch = useDispatch();
	const increase = () => {
		dispatch(myFrigoActions.addToMyFrigo({id, name}))
	}
	const decrease = () => {
		dispatch(myFrigoActions.removeFromMyFrigo({id}))
	}

	return(
		<div className='myFrigoList' key={id}>
			<div className='myFrigoContent'>
					<div className='img'>
						<img src={productImg} alt={name}  />
					</div>
					<div className='details'>
						<p>{name}</p>
						<div className='price'>
							<div className='qty flexCenter'>
								<button className='plus' onClick={increase}>
										<AiOutlinePlus/>
								</button>
								<button className='num'>{quantity}</button>
								<button className='minus' onClick={decrease}>
										<AiOutlineMinus/>
								</button>
							</div>
						</div>
					</div>
			</div>
		</div>
	)
}

export default MyFrigoItems;