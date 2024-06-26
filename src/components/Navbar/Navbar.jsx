import React, { useState } from 'react'

import { images } from '../../constants';
import { HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home',
          'about',
          'work',
          'skills',
          'contact'].map((item) => (
             <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
             </li>
          ))}
          <li className='app__flex p-text' key='link-CV'>
            <div />
            <a href={images.resume} target="_blank" rel="noreferrer">CV</a>
          </li>
      </ul>
      <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)}/>
            {
              Toggle && (
                <motion.div
                  whileInView={{ x: [300, 0] }}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                  <HiX onClick={() => setToggle(false)}/>
                  <ul>
                    {['home',
                      'about',
                      'work',
                      'skills',
                      'contact'].map((item) => (
                        <li key={item}>
                          <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        </li>
                      ))
                    }
                    <li key='CV'>
                      <a href={images.resume} target="_blank" rel="noreferrer">CV</a>
                    </li>
                    
                  </ul>
                </motion.div>
              )
            }
      </div>
    </nav>
  )
}

export default Navbar