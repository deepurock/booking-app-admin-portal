import React, { useContext } from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";
export default function Single() {
  const location = useLocation();
  const { userInfo } = location.state;
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            {userInfo.userName ? (
              <div className="item">
                {userInfo.img ? (
                  <img src={userInfo.img} alt="" className="itemImg" />
                ) : (
                  <img
                    src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    alt=""
                    className="itemImg"
                  />
                )}
                <div className="details">
                  <h1 className="itemTitle">{userInfo.userName}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{userInfo.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">{userInfo.phone}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">City:</span>
                    <span className="itemValue">{userInfo.city}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">{userInfo.country}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="item">
                {userInfo.photos.length ? (
                  <img src={userInfo.photos[0]} alt="" className="itemImg" />
                ) : (
                  <img
                    src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    alt=""
                    className="itemImg"
                  />
                )}
                <div className="details">
                  <h1 className="itemTitle">{userInfo.name}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Cheapest Price:</span>
                    <span className="itemValue">{userInfo.cheapestPrice}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">{userInfo.address}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">City:</span>
                    <span className="itemValue"> {userInfo.city}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Type:</span>
                    <span className="itemValue"> {userInfo.type}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Description:</span>
                    <span className="itemValue">{userInfo.desc}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Other Users</h1>
          <List />
        </div>
      </div>
    </div>
  );
}
