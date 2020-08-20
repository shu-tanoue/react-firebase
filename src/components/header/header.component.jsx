import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './header.styles.scss';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.util';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={Logo} alt='logo'  className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className="option" onClick={()=> auth.signOut()}> SIGN OUT </div>
        :
        <Link className="option" to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  //because we used combinedReducer, that's why we are accessing the 'user' property before the currentUser
  //state.<userReducer>.currentUser
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
