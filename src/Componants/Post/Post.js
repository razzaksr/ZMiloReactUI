import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post(attr) {

    const[like,setLike]=useState(attr.post.like)
    const[isLiked,setIsLiked]=useState(false)

    const eveLike=()=>{
        setLike(isLiked?like-1:like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className="pst">
        <div className="wrappost">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((v)=>v.id===attr.post.userId)[0].profilePicture} className="postProfileImg"/>
                    <span className="postUsername">{Users.filter((v)=>v.id===attr.post.userId)[0].username}</span>
                    <span className="postDate">{attr.post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{attr.post.desc}</span>
                <img src={attr.post.photo} className="postImg"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" onClick={eveLike} src="/props/like.png"/>
                    <img className="likeIcon" onClick={eveLike} src="/props/heart.png"/>
                    <span className="postLikeCounter">{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <CommentIcon className="comIcom"/>
                    <span className="postCommentText">{attr.post.comment}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
