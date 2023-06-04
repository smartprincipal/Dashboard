import React, { useContext } from 'react'
import './sidebar.scss'
import logo from '../../../Asset/logo.jpeg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

  const{dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
     <div className='top'>
      <Link to='/admin'>

      <img src={logo} alt="logo" width={70} />
      </Link>
     </div>


     <div className='center'>

      <ul>

       <p className="title">MAIN</p>
        <Link to='/admin'>

       <li>
        <DashboardIcon className='icon'/>
        <span>Dashboard</span>
       </li>
        </Link>

       <p className="title">LISTS</p>
       <Link to='/users' style={{textDecoration:"none"}}>
       <li>
        <PersonOutlineOutlinedIcon className='icon'/>
        <span>Users</span>
       </li>

       </Link>
       <Link to='/products' style={{textDecoration:"none"}}>


       <li>
        <ProductionQuantityLimitsIcon className='icon'/>
        <span>Products</span>
       </li>
       </Link>

       <Link to='/orders' style={{textDecoration:"none"}}>


       <li>
        <AddBusinessIcon className='icon'/>
        <span>Orders</span>
       </li>
       </Link>

       <Link to='/delivery' style={{textDecoration:"none"}}>


       <li>
        <LocalShippingIcon className='icon'/>
        <span>Delivery</span>
       </li>
       </Link>

       <p className="title">USEFUL</p>
       <Link to='/stats' style={{textDecoration:"none"}}>
       <li>
        <QueryStatsIcon className='icon'/>
        <span>Stats</span>
       </li>
       </Link>

       <Link to='/notification' style={{textDecoration:"none"}}>


       <li>
        <NotificationsActiveIcon className='icon'/>
        <span>Notification</span>
       </li>
       </Link>

       <p className="title">SERVICE</p>
       <Link to='/' style={{textDecoration:"none"}}>


       <li>
        <SettingsSystemDaydreamIcon className='icon'/>
        <span>System Health</span>
       </li>
       </Link>
       <Link to='/' style={{textDecoration:"none"}}>
       <li>
        <PsychologyIcon className='icon'/>
        <span>Logs</span>
       </li>
       </Link>
       <Link to='/' style={{textDecoration:"none"}}>


       <li>
        <SettingsIcon className='icon'/>
        <span>Settings</span>
       </li>
       </Link>

       <p className="title">USER</p>

       <Link to='/' style={{textDecoration:"none"}}>
       <li>
        <AccountCircleIcon className='icon'/>
        <span>Profile</span>
       </li>
       </Link>
       <Link to='/' style={{textDecoration:"none"}}>
       <li>
        <LogoutIcon className='icon'/>
        <span>Logout</span>
       </li>
       </Link>
      </ul>
     </div>
     <div className='bottom'>
      <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
      <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
     </div>

    </div>
  )
}

export default Sidebar