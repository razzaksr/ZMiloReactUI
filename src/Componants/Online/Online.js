import "./Online.css";

export default function Online(each) {
  return (
    <div>
      <li className="rtFriend">
              <div className="rtProfileImgContainer">
                <img className="rtProfileImg" src={each.every.profilePicture}/>
                <span className="rtOnline"></span>
              </div>
              <span className="rtUser">{each.every.username}</span>
            </li>
    </div>
  )
}
