import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PopUp from "./popUp";

const Header = () => {
  const { authDetails } = useSelector((state) => state.auth);
  const userDetails = JSON.parse(localStorage.getItem("userData"))
  console.log(userDetails , "userDetails::::")
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        position: "sticky",
        backgroundColor: "rgb(33 15 23 / 54%)",
        top: 0,
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "15px 0px",
        }}
      >
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              listStyle: "none",
              gap: "58px",
            }}
          >
            <li>
              <Link
                to={"/dashboard"}
                style={{
                  textDecoration: "none",
                  color: "#rgb(240 214 214)",
                  fontWeight: "700",
                  padding: "16px 0px",
                  fontSize: "19px",
                  fontFamily: "cursive",
                }}
              >
                SURFAWAY
              </Link>
            </li>
            <li>
              <Link
                to={"/contactus"}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                How it work
              </Link>
            </li>
            <li>
              <Link
                to={"/detail"}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Surf Camps
              </Link>
            </li>
            <li>
              <Link
                to={"/Blogs"}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to={"/Messages"}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Messages
              </Link>
            </li>
            <li>
              <Link
                to={"/photos-list"}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Photos
              </Link>
            </li>
          </ul>
        </div>
        {open && (
          
            
            <PopUp email={userDetails.email} />
        
        )}
        {userDetails.email ? (
          <div
            onClick={() => {
              setOpen(!open);
            }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              style={{
                height: "38px",
                width: "38px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              src="https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0="
            ></img>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "17px",
            }}
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: "11px 30px 11px 29px",
                  borderRadius: "28px",
                  backgroundColor: "transparent",
                  fontSize: "17px",
                  fontWeight: "700",
                  display: "flex",
                  gap: "7px",
                  border: "none",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                <FaRegUser />
                Sign In
              </button>
            </Link>
            <Link to={"/Register"} style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: "11px 30px 11px 29px",
                  borderRadius: "28px",
                  backgroundColor: "#fff",
                  fontSize: "14px",
                  fontWeight: "700",
                  display: "flex",
                  gap: "9px",
                  border: "none",
                  alignItems: "center",
                }}
              >
                <FaRegUser />
                Join now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
