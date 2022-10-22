import React from 'react';
import DarkMode from '../darkmode';
import Logo from '../../Icons/logo.png';
import styles from './styles';

const Header = () => {
  return (
    <div style={styles.header}>
      <img width={50} height={50} src={Logo} alt="logo" />
      <DarkMode />
    </div>
  );
};

export default Header;
