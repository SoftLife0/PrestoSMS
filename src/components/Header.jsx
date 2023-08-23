import React from 'react'
import softlife from '../assets/softlife.png'
import {Link} from 'react-router-dom'

function Header()  {

  return (
    <header>
        <div className="header">
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <Link to="/" style={{textDecoration: 'none' }}>
                        <h1>Presto SMS</h1>
                    </Link>
                </div>
            </div>
            
            <div className='header-right'>
                <div className='profile-details'>
                    <div className='elipse'>
                        <img src={softlife} alt=""width={100}/>
                    </div>
                </div>
            </div>
        </div>
            <hr className='line'/>
    </header>
  )
}

export default Header