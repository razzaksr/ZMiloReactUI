import "./RightBanner.css"
import { Users } from "../../dummyData"
import Online from "../Online/Online"



export default function RightBanner(which) {
  
  const DefOne=()=>{
    return(
      <>
          <div className="birthdayContainer">
            <img src="/props/gift.png" className="giftImg"/>
            <span className="giftText">
              <b>Sabarinathan</b> and <b>3 other friends</b>have a birthday today
            </span>
          </div>
          <img className="ad" src="/props/ad.png"/>
          <h4 className="rtTitle">Online friends</h4>
          <ul className="rtFriendList">
            {(Users.map((u)=>(
              <Online key={u.id} every={u} />
            )))}
          </ul>
      </>
    )
  }

  const ProfOne=()=>{
    return(
      <>
        <h3 className="userTitle">User Informations</h3>
        <ul className="basicInfo">
          <li className="basicItem">
            <span>City: Salem</span>
          </li>
          <li className="basicItem">
            <span>From: India</span>
          </li>
          <li className="basicItem">
            <span>Relationship: Married</span>
          </li>
        </ul>
        <h3 className="userTitle">Followers</h3>
        <div className="followingsInfo">
          <div className="following">
            <img className="followImg" src="/props/person/2.jpeg"/>
            <span className="followUser">James Cameron</span>
          </div>
          <div className="following">
            <img className="followImg" src="/props/person/3.jpeg"/>
            <span className="followUser">Linda</span>
          </div>
          <div className="following">
            <img className="followImg" src="/props/person/4.jpeg"/>
            <span className="followUser">Dora</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="banright">
        <div className="wrapright">
          {
            (which.what==="regular")?<DefOne/>:<ProfOne/>
          }
        </div>
    </div>
  )

  

  

  
}
