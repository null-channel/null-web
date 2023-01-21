import React from 'react';
import Link from 'next/link';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FaYoutube } from 'react-icons/fa'

import './youtube.module.css'

const YoutubeLink: React.FC = () => {
    return (
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className='youtube-icon-wrapper'>
            <a target="_blank" aria-label="Watch on Youtube">
                <FaYoutube size={30} className="youtube-icon" color="var(--primary-color-text)" />
            </a>
        </Link>
    );
};

export default YoutubeLink;
