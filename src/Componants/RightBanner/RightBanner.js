import "./RightBanner.css"

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
            <li className="rtFriend">
              <div className="rtProfileImgContainer">
                <img className="rtProfileImg" src="/props/person/2.jpeg"/>
                <span className="rtOnline"></span>
              </div>
              <span className="rtUser">Kevin nash</span>
            </li>
            <li className="rtFriend">
              <div className="rtProfileImgContainer">
                <img className="rtProfileImg" src="/props/person/2.jpeg"/>
                <span className="rtOnline"></span>
              </div>
              <span className="rtUser">Kevin nash</span>
            </li>
            <li className="rtFriend">
              <div className="rtProfileImgContainer">
                <img className="rtProfileImg" src="/props/person/2.jpeg"/>
                <span className="rtOnline"></span>
              </div>
              <span className="rtUser">Kevin nash</span>
            </li>
          </ul>
        </div>
    </div>
  )
}
