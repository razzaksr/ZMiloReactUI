import "./LeftBanner.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from "../../dummyData";
import CloseFriends from "../CloseFriends/CloseFriends";
export default function LeftBanner() {
  return (
    <div className="banleft">
        <div className="wrapleft">
            <ul className="banleftList">
                <li className="banleftListItem">
                    <RssFeedIcon className="banleftListItemIcon" />
                    <span className="banleftListItemText">NewsFeeds</span>
                </li>
                <li className="banleftListItem">
                    <ChatIcon className="banleftListItemIcon" />
                    <span className="banleftListItemText">Chats</span>
                </li>
                <li className="banleftListItem">
                    <OndemandVideoIcon className="banleftListItemIcon" />
                    <span className="banleftListItemText">Video</span>
                </li>
                <li className="banleftListItem">
                    <GroupsIcon className="banleftListItemIcon" />
                    <span className="banleftListItemText">Groups</span>
                </li>
                <li className="banleftListItem">
                    <BookmarksIcon className="banleftListItemIcon" />
                    <span className="banleftListItemText">Bookmarks</span>
                </li>
                <li className="banleftListItem">
                    <LiveHelpIcon className="banleftListItemIcon" />
                    <span className="banleftListItemText">Questions</span>
                </li>
                <li className="banleftListItem">
                    <WorkIcon className="banleftListItemIcon" />
                    <span className="banleftListItemText">Jobs</span>
                </li>
                <li className="banleftListItem">
                    <EventIcon className="banleftListItemIcon" />
                    <span className="banleftListItemText">Events</span>
                </li>
                <li className="banleftListItem">
                    <SchoolIcon className="banleftListItemIcon" />
                    <span className="banleftListItemText">Courses</span>
                </li>
            </ul>
            <button className="banleftButton">Show More...</button>
            <hr className="banleftHr"/>
            <ul className="banleftFriendList">
                {Users.map((v)=>(
                    <CloseFriends each={v} key={v.id}/>
                ))}
            </ul>
        </div>
    </div>
  )
}
