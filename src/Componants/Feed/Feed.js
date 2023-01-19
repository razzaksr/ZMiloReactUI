import Post from "../Post/Post"
import Share from "../Share/Share"
import "./Feed.css"

export default function Feed() {
  return (
    <div className="fed">
        <div className="wrapfed">
          <Share/>
          <Post/><Post/><Post/>
        </div>
    </div>
  )
}
