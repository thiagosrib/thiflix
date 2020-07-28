import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../assets/images/THIFLIX.png';
import './style.css';

import Button from '../Button';
// import ButtonLink from './../ButtonLink';

export default function Menu({ showButton }) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={ Logo } alt="THIFLIX" />
      </Link>

      {
        (showButton && <Button as={ Link } className="ButtonLink" to="/cadastro/video">
          Novo video
        </Button>)
      }
    </nav>
  )
};