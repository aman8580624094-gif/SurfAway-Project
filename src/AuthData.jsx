import Layout from "./component/Layout"
import {  useSelector } from "react-redux";

const AuthDetail=()=>{
      // const { authDetails } = useSelector((state) => state.auth);
      const authDetails = JSON.parse(localStorage.getItem("userData"))

return(
    <Layout>
      <div
        style={{
          display: "flex",
          displayDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: " 41%",
            boxShadow: "0px 0px 12px 4px #e0e0e0",
            zIndex: "9",
            paddingLeft: "20px",
            marginTop: "40px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "#2e2a2a" }}>
            Author Detail
          </h1>
          
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            UserId:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
             {authDetails.id}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            First Name:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {authDetails.firstName}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            Last Name:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {authDetails.lastName}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" ,paddingBottom:"20px" ,}}>
            Email:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
            {authDetails.email}
            </span>
          </h1>
        </div>
      </div>
    </Layout>
  )
}

export default AuthDetail 