import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href='https://www.linkedin.com/in/yahya-bouhsine-363256244/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        </div>
        <div>
            <a href='https://www.facebook.com/profile.php?id=100080233360652' target='_blank' rel="noreferrer"><FaFacebookF /></a>
        </div>
        <div>
            <a href='https://www.instagram.com/yahya.bouhsine/' target='_blank' rel="noreferrer"><BsInstagram /></a>
        </div>
    </div>
);

export default SocialMedia;