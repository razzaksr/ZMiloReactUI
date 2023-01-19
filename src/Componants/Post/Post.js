import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';

export default function Post() {
  return (
    <div className="pst">
        <div className="wrappost">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/props/person/1.jpeg" className="postProfileImg"/>
                    <span className="postUsername">Linda</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Bismillah!!!!</span>
                <img src="/props/post/1.jpeg" className="postImg"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/props/like.png"/>
                    <img className="likeIcon" src="/props/heart.png"/>
                    <span className="postLikeCounter">45 people liked it</span>
                </div>
                <div className="postBottomRight">
                    <CommentIcon className="comIcom"/>
                    <span className="postCommentText">19</span>
                </div>
            </div>
        </div>
    </div>
  )
}
