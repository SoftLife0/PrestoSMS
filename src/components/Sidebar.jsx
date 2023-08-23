import React from 'react';
import { BiSolidMessageRoundedDetail, BiMoney, BiFile, BiBookAdd, BiSolidImageAdd, BiSolidDownArrowCircle } from 'react-icons/bi';
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
                <div className='active-content'>
                    <BiMoney className='icon'/>
                    Balance
                </div>
                <div className='active-button'>
                    <BiSolidDownArrowCircle onClick={toggleExpansion}/>
                </div>
            </div>
            {isExpanded && (
                <div>
                    <h6>SMS/EMAIL</h6>
                    <h5><b>GHC17.06</b></h5>
                </div>
            )}
            
         </div>
        </li>
        <li className='sidebar-list-item'>
            <BiSolidMessageRoundedDetail className='icon' />
            All Year
        </li>
        <li className='sidebar-list-item'>
            <BiBookAdd className='icon' />
            Add New Year
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
    </aside>
  );
}

export default Sidebar;
