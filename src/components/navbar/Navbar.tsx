'use client'

import Link from 'next/link';
import React from 'react';

const styles = {
  navbtn: `py-2 px-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mx-3`
}

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
]

const Navbar = () => {
  return (
    <div>
      <Link href="/">Cardano</Link>
      <div>
        {links.map(link=>(
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button onClick={()=>{console.log("logged out")}}>Logout</button>
        
      </div>
    </div>
  )
}

export default Navbar