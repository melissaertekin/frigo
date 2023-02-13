import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container flex'>
        <p>Frigo</p>
        <div className='social'>
          <BsFacebook className='icon' />
          <RiInstagramFill className='icon' />
          <AiFillTwitterCircle className='icon' />
          <AiFillLinkedin className='icon' />
        </div>
      </div>
    </footer>
  )
}

export default Footer;