import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logoImg from '@/assets/logo.png'
import classes from "./main-header.module.css"
import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link'



const MainHeader = () => {

  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it"  priority/>
        Nextlevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
          <NavLink href={'/meals'}> Browse Meals</NavLink>
          </li>
          <li>
          <NavLink href={'/community'}> Foodie Community</NavLink>
          </li>
        </ul>
      </nav> 
    </header>
    </>
  );
};

export default MainHeader
