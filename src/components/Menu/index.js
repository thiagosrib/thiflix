import React from 'react';

import Logo from './../../assets/images/THIFLIX.png';
import './style.css';

import Button from '../Button';
// import ButtonLink from './../ButtonLink';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={ Logo } alt="THIFLIX" />
      </a>

      <Button as='a' className="ButtonLink" href="/">
        Novo video
      </Button>
    </nav>
  )
};