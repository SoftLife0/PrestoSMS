import React from 'react';
import { BiCalendar, BiCategory, BiFile, BiBookAdd, BiSolidImageAdd } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../css/Dashboard.css'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
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
          <Link to='/'>
            <BiCategory className='icon' />
            Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/year'>
            <BiCalendar className='icon' />
            All Year
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/new'>
            <BiBookAdd className='icon' />
            Add New Year
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/csv'>
            <BiSolidImageAdd className='icon' />
            Import CSV
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/reports'>
            <BiFile className='icon' />
            Reports
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
