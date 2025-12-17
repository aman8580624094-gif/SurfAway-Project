import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuthDetails } from "../redux/reducer/authSlice";

const PopUp = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
      dispatch(setAuthDetails({}));
      localStorage.removeItem("accessToken")
      navigate("/")

  };
  return (
    <div
      style={{
        zIndex: "10000",
        position: "absolute",
        top: "80px",

        display: "flex",
        flexDirection: "column",
        background: " rgb(187, 192, 195)",
        height: "155px",
        alignItems: "center",

        padding: "11px 0px 10px 0px",
        borderRadius: "6px",
        right: "45px",

        boxShadow: "0px 0px 0px 2px rgb(82 75 75 / 57%)",
      }}
    >
      <div>
        <div>
          <img
            style={{ height: "46px", borderRadius: "28px" }}
            src="https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0="
          ></img>
          <p style={{ margin: "0", color: "#8f3f3f", fontWeight: "500" }}>
            Profile
          </p>
        </div>
      </div>
      <div
        style={{
          borderBottom: " 1px solid",
          borderColor: "#236aa7",
          paddingBottom: "8px",
        }}
      >
        <Link to={"/author-detail"}>
          <p
            style={{
              color: "#0e0c0c",
              fontWeight: "500",
              fontSize: "14px",

              padding: "5px 17px 0px",
            }}
          >
            {email}
          </p>
        </Link>
      </div>
      <div style={{ padding: "2px 0px 3px 0px" }}>
        <button
          onClick={handleLogOut}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            background: "rgb(187, 192, 195)",
            border: "none",
            color: " #2662a1",
            fontWeight: "600",
          }}
        >
          Logout
          <span style={{ marginTop: "2px" }}>
            <MdOutlineKeyboardArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};
export default PopUp;
