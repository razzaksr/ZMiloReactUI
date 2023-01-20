import "./RightBanner.css"
import { Users } from "../../dummyData"
import Online from "../Online/Online"

export default function RightBanner() {
  return (
    <div className="banright">
        <div className="wrapright">
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
        </div>
    </div>
  )
}
