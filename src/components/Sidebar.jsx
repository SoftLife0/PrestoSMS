import React from 'react';
import { BiSolidMessageRoundedDetail, BiMoney, BiFile, BiBookAdd, BiSolidImageAdd, BiSolidDownArrowCircle } from 'react-icons/bi';
import {BsFillEnvelopeAtFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import '../css/Dashboard.css'
import { useState } from 'react';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

  


  return (
    <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive' : 'sidebar'}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          {/* <img src={logo} alt='' /> */}
            <Link to="/" style={{textDecoration: 'none' }}>
                <h1>Presto SMS</h1>
            </Link>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item-active'>
            <div>
                <div className='active-header'>
                      <Link to="/dashboard">
                    <div className='active-content'>
                        <BiMoney className='icon'/>
                        Dashboard
                    </div>
                      </Link>
                    <div className='active-button'>
                        <BiSolidDownArrowCircle onClick={toggleExpansion}/>
                    </div>
                </div>
                {isExpanded && (
                    <div>
                        <h6>Total Balance</h6>
                        <h5><b>GHC129.06</b></h5>
                    </div>
                )}
                
            </div>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/sendsms" style={{color: '#000'}}>
            <BiSolidMessageRoundedDetail className='icon' />
            Send SMS
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/sendemail">
          </Link>
            <BsFillEnvelopeAtFill className='icon' />
            Send E-Mail
        </li>
        <li className='sidebar-list-item'>
            <BiSolidImageAdd className='icon' />
            Import CSV
        </li>
        <li className='sidebar-list-item'>
            <BiFile className='icon' />
            SMS Reports
        </li>
      </ul>

      <button className='bottom-button'>
        Contact Us
      </button>
    </aside>
  );
}

export default Sidebar;
