import { FaFacebook } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Pasword: "",
  });
  const changes = (e) => {
    const{name , value} = e.target
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const savedata = ()=>{
  console.log(formData);
  }
  return (
    <div
      style={{
        textAlign:"center",
        display: "flex",
        justifyContent: "space-around",
        textAlign: "left",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: " 0px 66px 30px 30px",
          marginTop: "55px",
          boxShadow: "0px 0px 8px 3px rgb(204, 201, 201)",
          width: "37%",
          borderRadius: "12px",
        }}
      >
        <h1
          style={{
            marginBottom: "-15px",
            fontWeight: "700",
            fontSize: "33px",
            textAlign: "center",
            color: "#235a88",
          }}
        >
          Registeration
        </h1>
        <div style={{ marginTop: " 32px" }}>
          <div style={{ gap: " 80px", display: "flex", alignItems: "center" }}>
            <div>
              <h5
                style={{
                  fontSize: "18px",
                  color: "rgb(24 19 19 / 84%)",
                  margin: "0px 0px -13px 0px",
                }}
              >
                First Name
              </h5>
              <br />
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={changes}
                style={{
                  padding: " 10px 11px 10px 12px",
                  fontSize: "14px",
                  borderRadius: "4px",
                  width: "112%",
                  border: "none",
                  boxShadow: " 0px 0px 2px 1px #dddada",
                }}
              ></input>
            </div>
            <div style={{ padding: "20px 0px" }}>
              <h5
                style={{
                  fontSize: "18px",
                  color: "rgb(24 19 19 / 84%)",
                  margin: "0px 0px -13px 0px",
                }}
              >
                Last Name
              </h5>
              <br />
              <input
                type="Text"
                placeholder="Last Name"
                name="lastName"
                onChange={changes}
                style={{
                  padding: " 10px 11px 10px 12px",
                  fontSize: "14px",
                  borderRadius: "4px",
                  width: "112%",
                  border: "none",
                  boxShadow: " 0px 0px 2px 1px #dddada",
                }}
              ></input>
            </div>
          </div>
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
              name="email"
              onChange={changes}
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
              name="Pasword"
              onChange={changes}
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
              onClick={savedata}
              style={{
                padding: "11px 140px",
                fontSize: "20px",
                fontWeight: "600",
                color: "rgb(74, 64, 64)",
                border: "none",
                boxShadow: "0px 0px 2px 0px",
                marginLeft: "20px",
                backgroundColor: "#d02d2dd9",
                borderRadius: "12px",
                color: "#fff",
                width: "100",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              Register
            </button>
          </div>
          <h2
            style={{
                  color: "#2e1919",
              textAlign: "center",
              fontSize: "18px",
              marginTop: "8px",
              marginBottom: "8px",
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
             Already has been account?
            <Link to ={"/"} style={{textDecoration:"none",}}>
            <span
              style={{ color: "#467c55", paddingLeft: "5px", fontSize: "16px" }}
            >
              Log in
            </span>
            </Link>
          </p>
          <div style={{ display: "flex", gap: "13px", marginLeft: "40px" ,}}>
            <p
              style={{
                padding: "8px 12px",
                fontSize: "13px",
                fontWeight: "600",
                border: "none",
                boxShadow: "0px 0px 4px 1px #c4d3e475",
                marginTop: "9px",
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
                marginTop: "9px",
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
export default Register;
