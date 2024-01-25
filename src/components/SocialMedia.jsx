import React from 'react';
import { BsGithub, BsMedium, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://github.com/MaryImr" target="_blank"><BsGithub /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/maryam-imran-5ab6bbb8" target="_blank"><BsLinkedin /></a>
        </div>
        <div>
            <a href="https://medium.com/@maryamimran405" target="_blank"><BsMedium /></a>
        </div>
    </div>
  )
}

export default SocialMedia