import {AiOutlinePlusCircle} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { myFrigoActions } from '../../store/myFrigoSlice';

const ProductCart = ({ key, id, productImg, name }) => {
	const dispatch = useDispatch();
	
	const addToMyFrigo = () => {
		dispatch(myFrigoActions.addToMyFrigo({id,name , productImg}));
	}

	return(
		<div className='box boxItem' id='product' onClick={addToMyFrigo}>
			<div className='img'>
				<img src={productImg} alt='productImg' />
			</div>
			<div className='details'>
				<p>{name}</p>
				<button>
					<AiOutlinePlusCircle/>
					Add To MyFrigo
				</button>
			</div>
		</div>	
	);
}

export default ProductCart;