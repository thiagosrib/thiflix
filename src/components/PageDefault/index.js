import React from 'react';

import Menu from '../Menu';
import Footer from '../Footer';

import { Main } from './styles';

export default function PageDefault(props) {
  return (
    <>
      <Menu {...props} />
        <Main>
          {props.children}
        </Main>
      <Footer />
    </>
  )
}