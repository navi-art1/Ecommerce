import "../App/App.css";
import { Layout } from "../../Components/Layout";
import "./styles.css";
function SignIn() {
  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="signin-main">
        <input type="checkbox" id="signin-chk" aria-hidden="true" />

        <div className="signin-signup">
          <form>
            <label htmlFor="signin-chk" aria-hidden="true">
              Sign up
            </label>

            <input
              className="inputSign"
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            <input
              className="inputSign"
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button className="buttonSign">Sign up</button>

            <p className="labelForgot">Forgot your Password</p>
          </form>
        </div>

        <div className="signin-login">
          <form>
            <label htmlFor="signin-chk" aria-hidden="false">
              Login
            </label>
            <input
              className="inputSign"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="inputSign"
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button className="buttonSign">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export { SignIn };
