import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { myFrigoActions } from '../../store/myFrigoSlice';


const RecipeDesc = ({recipeImg, name, desc }) => {

    /*
    const dispatch = useDispatch();
    const addToMyFrigo = () => {
        dispatch(myFrigoActions.addToMyFrigo({id,name , recipeImg}));
    }
    */
    return(
        <>
            <div className='box boxItem' id='recipe'>
                <div className='image'>
                    <Link>
                        <img src={recipeImg} alt='recipeImg' />
                    </Link>
                 </div>
                <div className='details'>
                    <p>{name}</p>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}
export default RecipeDesc;