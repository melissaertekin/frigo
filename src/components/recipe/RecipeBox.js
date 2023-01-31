import { Link } from 'react-router-dom';
import {MdOutlineFavoriteBorder} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { recipeActions } from '../../store/recipeSlice';




const RecipeCart = ({ key, id, recipeImg, name, desc }) => {

    
    const dispatch = useDispatch();
    const addToFav = () => {
        dispatch(recipeActions.addTofavorites({id,name, recipeImg, desc}));
    }
    return(
        <>
            <div className='box boxItem' id='recipe'>
                <div className='img'>
                    <Link>
                        <img src={recipeImg} alt='recipeImg' />
                    </Link>
                </div>
                <div className='details'>
                    <p>{name}</p>
                    <p>{desc}</p>
                    <button onClick={addToFav} >
                        <MdOutlineFavoriteBorder/>
                        Add To Favoites
                    </button>
                </div>
                
            </div>
        </>
    )
}
export default RecipeCart;