import './single.scss'
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import Chart from '../../Components/chart/Chart';
import img2 from '../../../Asset/img2.jpg'
import Table from '../../Components/table/Table'
// import { useSelector } from 'react-redux';


const Single = () => {

  // const user =useSelector(state=>state.allUser.user)
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">User Information</h1>
            <div className="item">
            <img
                src={img2}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">rttyynn hhhhh</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">westsideyjay@gmail.com</span>

                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">08138187957</span>

                </div>

                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">5, tiwatayo street</span>

                </div>

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Nigeria</span>

                </div>

                {/* <div className="detailItem">
                  <span className="itemKey">Refferal Code:</span>
                  <span className="itemValue">{user.referralCode}</span>

                </div>

                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">{user.status}</span>

                </div>

                <div className="detailItem">
                  <span className="itemKey">Earned Bonus:</span>
                  <span className="itemValue">{user.earnedBonus.$numberDecimal}</span>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Referral Counts:</span>
                  <span className="itemValue">{user.referralCount.$numberDecimal}</span>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Graduating Bonus:</span>
                  <span className="itemValue">{user.graduatingBonus.$numberDecimal}</span>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Wallet:</span>
                  <span className="itemValue">{user.wallet.$numberDecimal}</span>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Created:</span>
                  <span className="itemValue">{user.createdAt}</span>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Payment:</span>
                  <span className="itemValue">{user.isPayment}</span>

                </div>

                <div className="detailItem">
                  <span className="itemKey">Car Award:</span>
                  <span className="itemValue">{user.car_award.$numberDecimal}</span>

                </div>

                <div className="detailItem">
                  <span className="itemKey">suv Award:</span>
                  <span className="itemValue">{user.suv_award.$numberDecimal}</span>

                </div>

                <div className="detailItem">
                  <span className="itemKey">Housing Award:</span>
                  <span className="itemValue">{user.housing_award.$numberDecimal}</span>

                </div>

                <div className="detailItem">
                  <span className="itemKey">Gift:</span>
                  <span className="itemValue">{user.gift.$numberDecimal}</span>

                </div>

                <div className="detailItem">
                  <span className="itemKey"> Laptop Award:</span>
                  <span className="itemValue">{user.laptop_award_or_equivalent.$numberDecimal}</span>

                </div>

                <div className="detailItem">
                  <span className="itemKey">Social Club:</span>
                  <span className="itemValue">{user.mbbpil_social_club.$numberDecimal}</span>

                </div> */}


              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title= "User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction Section</h1>
          <Table/>
        </div>

      </div>
    </div>
  )
}

export default Single