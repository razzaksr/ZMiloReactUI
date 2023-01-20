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
                <div className="upper">
                    <div className="proMedia">
                        <img className="profileCover" src="/props/post/7.jpeg"/>
                        <img className="profilePic" src="/props/person/1.jpeg"/>
                    </div>
                    <div className="proData">
                        <h4 className="proName">Peige</h4>
                        <span className="proInfo">WWE legend</span>
                    </div>
                </div>
                <div className="lower">
                    <Feed/>
                    <RightBanner what="profile"/>
                </div>
            </div>
        </div>
    </>
  )
}
