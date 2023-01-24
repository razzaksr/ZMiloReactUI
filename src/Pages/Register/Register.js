import "./Register.css"

export default function Register(pro) {
  return (
    <div>
      <div className="log">
        <div className="wraplog">
            <div className="logLeft">
                <h3 className="logIcon">ZMilo</h3>
                <span className="logDesc">
                    Connect to the world through ZMilo
                </span>
            </div>
            <div className="logRight">
                <div className="logBox">
                    <input type="text" className="logInput" placeholder="Full Name"/>
                    <input type="text" className="logInput" placeholder="email"/>
                    <input type="password" className="logInput" placeholder="password"/>
                    <input type="password" className="logInput" placeholder="confirm"/>
                    <button className="logButton">Sign UP</button>
                    <button onClick={()=>pro.what(false)} className="logRegister">
                        Log into account
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
