import React from 'react'
import softlife from './assets/softlife.png'

function Header()  {

  return (
    <header>
        <div className="header">
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <h1>Presto SMS</h1>
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