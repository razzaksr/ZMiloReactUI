import "./Share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


export default function Share() {
  return (
    <div className="shr">
        <div className="wrapshare">
            <div className="shareTop">
                <img className="shareProfileImg" src="/props/person/1.jpeg"/>
                <input className="shareInput" placeholder="What's in your mind?" />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="#fc7a46" className="shareIcon"/>
                        <span className="shareOptionText">Photo or video</span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <LocationOnIcon htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Emotions</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
