import React from 'react'
import './Admin.scss'
import Sidebar from '../Components/sidebar/Sidebar'
import Navbar from '../Components/navbar/Navbar'
import Widget from '../Components/widget/Widget'
import Featured from '../Components/featured/Featured'
import WelcomeFeatured from '../Components/featured/WelcomeFeatured'
import Chart from '../Components/chart/Chart'
import Table from '../Components/table/Table'

const Admin = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="adminContainer">
        <Navbar/>
        <div className="widgetContainer">
          <Widget type='user'/>
          <Widget type='order'/>
          <Widget type='earnings'/>
          <Widget type='balance'/>
        </div>
        <div className="chartsContainer">
          <Featured/>
          <Chart title='Last 6 Months(Revenue)' aspect={2/1} />
          <WelcomeFeatured/>

        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Admin