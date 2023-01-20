import "./Topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
export default function Topbar(prop){
    const mod=()=>{
        prop.what(false)
    }
    const mods=()=>{
        prop.what(true)
    }
    return(
        <>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">
                        ZMilo
                    </span>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <SearchIcon className="searchIcon"/>
                        <input type="text" className="searchInput" placeholder="Find friends, posts, videos"/>
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink" onClick={mods}>Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <AccountCircleIcon/>
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <ForumIcon/>
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <CircleNotificationsIcon/>
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                    <img onClick={mod} className="topbarImg" src="/props/person/1.jpeg"/>
                </div>
            </div>
        </>
    )
}