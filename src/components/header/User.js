import React, { useState } from 'react';
import { Link } from "react-router-dom";
// Icon imports
import {MdOutlineScreenSearchDesktop, MdLocalGroceryStore} from 'react-icons/md';
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"


const User = () => {
    const [profileOpen, setProfileOpen] = useState(false);

    const close = () => {
        setProfileOpen(false);
    }
    const open = () => {
        setProfileOpen(true);
    }

    return(
        <>
            <div className='profile'>
               <button className='img' onClick={open}>
                    <img src='https://cdn-icons-png.flaticon.com/512/1144/1144709.png' alt='profile'/>
                </button>
                {profileOpen && (
                    <div className='openProfile boxItems' onClick={close}>
                        <div className='img'>
                            
                            <div className='img' onClick={close}>
                            <img src='https://cdn-icons-png.flaticon.com/512/1144/1144709.png' alt='profile'/>
                            </div>
                            
                            <div className='text'>
                                <h4>Melissa Ertekin</h4>
                                <label htmlFor=''>Strasbourg, France</label>
                            </div>
                        </div>
                        <Link to='/market'>
                            <button className='box'>
                                <MdLocalGroceryStore className='icon'/>
                                <h4>Market Place</h4>
                            </button>
                        </Link>
                        <Link to='/browse'>
                            <button className='box'>
                                <MdOutlineScreenSearchDesktop className='icon'/>
                                <h4>Recipes</h4>
                            </button>
                        </Link>
                        <button className='box'>
                            <AiOutlineHeart className='icon' />
                            <h4>Favorite Recipes</h4>
                        </button>
                        <button className='box'>
                            <GrHelp className='icon' />
                            <h4>Help</h4>
                        </button>
                        
                    </div>
                )}
            </div>
        </>
    );
}
export default User;