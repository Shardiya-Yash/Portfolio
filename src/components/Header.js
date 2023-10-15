import React from 'react'
import {AiOutlineTwitter,AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook } from 'react-icons/bs'

function Header() {

  let navList = ["Home", "About", "Resume", "Services", "Portfolio", "Contact"]


  return (
    <header>
      <div className="logo">
        <p>YASH SHARDIYA</p>
      </div>
      <nav className="list">
        {navList.map((list, index) => (
          <p key={index}>
            <a href='#'>{list}</a>
          </p>
        ))}
      </nav>
      <div className="social-media">
        <AiOutlineTwitter />
        <BsFacebook />
        <AiFillLinkedin />

      </div>
    </header>
  )
}

export default Header