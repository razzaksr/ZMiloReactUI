import "./Profile.css"
import LeftBanner from '../../Componants/leftbanner/LeftBanner'
import Topbar from "../../Componants/Topbar/Topbar"
import Feed from "../../Componants/Feed/Feed"
import RightBanner from "../../Componants/RightBanner/RightBanner"

export default function Profile() {
  return (
    <>
        <div className='profileContainer'>
            <LeftBanner/>
            <div className="infoWrap">
                Profile
            </div>
        </div>
    </>
  )
}
