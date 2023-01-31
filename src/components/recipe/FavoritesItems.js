import React from 'react';
import {AiOutlineClose, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import { useDispatch } from 'react-redux';


const FavoriteItems = ({id,name, recipeImg, desc }) => {

    const dispatch = useDispatch();
    
    // Class names are the same because they have the same structure
    return(
        <>
           <div className='favoritesList' key={id}>
            <div className='favoritesContent'>
                <div className='img'>
                    <img src={recipeImg} alt={name}  />
                </div>
                <div className='details'>
                    <p>{name}</p>
                    
                </div>
            </div>
           </div>
        </>
    )
}
export default FavoriteItems;