import { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAuthDetails } from "../redux/reducer/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState("");

  const url = process.env.REACT_APP_BASE_URL;
  const auth = "authdata";

  const handleSignIn = async () => {
    if (!email || !password) {
      return alert("Email and password is required!");
    }
    try {
      setloading(true);
      const apiData = {
        email: email,
        password: password,
      };
      const response = await axios.post(`${url}/auth/login`, apiData);
      if (response.data && response.status === 200) {
        console.log(response, "response::::");
        dispatch(setAuthDetails(response.data.data));
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.tokens.accessToken)
        );
        localStorage.setItem("userData", JSON.stringify(response.data.data));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error, "getting error");
      alert(error.response.data.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        textAlign: "left",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: " 4px 87px 35px 30px",
          marginTop: "55px",
          boxShadow: "0px 0px 13px 3px #e9e9e9",
          width: "30%",
          borderRadius: "12px",
        }}
      >
        <div>
          <h4
            style={{
              marginBottom: "-7px",
              fontWeight: "700",
              fontSize: "23px",
              fontFamily: "system-ui",
              color: "#0e5485eb",
            }}
          >
            Welcome Back To SurfAway
          </h4>
          <p
            style={{
              fontWeight: "500",
              color: "rgba(19, 31, 77, 0.79)",
              fontSize: "13px",
              marginTop: "12px",
            }}
          >
            Log in to your account
          </p>
        </div>
        <div style={{ marginTop: " 32px" }}>
          <div>
            <h5
              style={{
                fontSize: "18px",
                color: "rgb(24 19 19 / 84%)",
                margin: "0px 0px -13px 0px",
              }}
            >
              Email
            </h5>
            <br />
            <input
              type="Email"
              placeholder="Email"
              name="html"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: " 10px 11px 10px 12px",
                fontSize: "14px",
                borderRadius: "4px",
                width: "100%",
                border: "none",
                boxShadow: " 0px 0px 2px 1px #dddada",
              }}
            ></input>
          </div>
          <div style={{ marginTop: "25px" }}>
            <h5
              style={{
                fontSize: "18px",
                color: "rgb(24 19 19 / 84%)",
                margin: "0px 0px -13px 0px",
              }}
            >
              Password
            </h5>
            <br />
            <input
              type="Password"
              placeholder="Password"
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: " 10px 11px 10px 12px",
                fontSize: "14px",
                borderRadius: "4px",
                width: "100%",
                border: "none",
                boxShadow: " 0px 0px 2px 1px #dddada",
              }}
            ></input>
          </div>
          <div
            style={{
              marginTop: " 40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={handleSignIn}
              style={{
                cursor: "pointer",
                width: "89%",
                height: "45px",
                fontSize: "20px",
                fontWeight: "600",
                color: "rgb(74, 64, 64)",
                border: "none",
                boxShadow: "0px 0px 2px 0px",
                backgroundColor: "#d02d2dd9",
                borderRadius: "12px",
                color: "#fff",
              }}
            >
              {loading ? "Loading" : "SignIn"}
            </button>
          </div>
          <h2
            style={{
              textAlign: "center",
              fontSize: "18px",
              marginTop: "12px",
              marginBottom: "12px",
            }}
          >
            Or
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "13px",
              fontWeight: "500",
              color: "#716b6b",
              marginBottom: "6px",
              marginTop: "6px",
            }}
          >
            Don't have an account?
            <Link to={"/register"} style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#467c55",
                  paddingLeft: "5px",
                  fontSize: "16px",
                }}
              >
                Register
              </span>
            </Link>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#040404b3",
              fontSize: "12px",
              marginBottom: "-17px",
            }}
          ></div>
          <div style={{ display: "flex", gap: "13px", marginLeft: "10px" }}>
            <p
              style={{
                padding: "8px 12px",
                fontSize: "13px",
                fontWeight: "600",
                border: "none",
                boxShadow: "0px 0px 4px 1px #c4d3e475",
                marginTop: "28px",
                borderRadius: "16px",
                color: " #117cc7fa",
              }}
            >
              <span style={{ paddingRight: "5px", color: "#2100d4" }}>
                <FaFacebook />
              </span>
              Continue With Facebook
            </p>

            <p
              style={{
                padding: "8px 12px",
                fontSize: "13px",
                fontWeight: "600",
                border: "none",
                boxShadow: "0px 0px 4px 1px #c4d3e475",
                marginTop: "28px",
                borderRadius: "16px",
                color: " #117cc7fa",
              }}
            >
              <span
                style={{
                  paddingRight: "5px",
                  color: "#df182e",
                  fontSize: "14px",
                }}
              >
                <RiInstagramLine />
              </span>
              Continue With instagram
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
