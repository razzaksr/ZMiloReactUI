import "./Login.css"

export default function Login() {
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
                    <input type="text" className="logInput" placeholder="email"/>
                    <input type="text" className="logInput" placeholder="password"/>
                    <button className="logButton">LogIn</button>
                    <span className="logForgot">Forget password?</span>
                    <button className="logRegister">
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
