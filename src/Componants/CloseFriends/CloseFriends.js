import "./CloseFriends.css"

export default function CloseFriends(gets) {
  return (
    <div>
      <li className="banleftFriend">
                    <img className="banleftFriendImg" src={gets.each.profilePicture}/>
                    <span className="banleftFriendName">{gets.each.username}</span>
                </li>
    </div>
  )
}
