import Head from "next/head";
import layoutStyles from "../styles/layout.module.scss";
import NavBar from "@/components/NavBar";
import React, {useState} from 'react';

export default function Layout({
    children,
}){

    const navItems = [
        {id: 0, text: 'home', href:'/'},
        {id: 1, text: 'about', href: '/about'},
        {id: 2, text: 'contact', href: '/contact'}
      ]
    
      const [currActive, setActive] = useState('home');

    const props = {currActive, setActive, navItems: navItems, className: layoutStyles.NavBar};

      
    return (
    <>
      <Head>
        <title>NextJS Sample Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="top-bar" >
          <NavBar {...props} />
        </section>
        <section id="main-content">
          {children}
        </section>
      </main>
    </>
    )
}