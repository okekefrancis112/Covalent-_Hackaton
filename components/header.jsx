import React, { Fragment, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Link from "next/link";


const Header = () => {

    const [search, setSearch] = useState("")

  return (
    <Fragment>
        <header className='header'>
            <Link href="/">
              <h1 className="cu">CoinDAO</h1>
            </Link>
            
            <div className='search-input'>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search CoinDAO" />
                <BsSearch size={14} className='search-icon' />
            </div>
        </header>
    </Fragment>
  )
}

export default Header