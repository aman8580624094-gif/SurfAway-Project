import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails, setUsers } from "./redux/reducer/newUserSlice";
import Layout from "./component/Layout";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.users);
  console.log(userDetails);
  const fetchuserDetails = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      // saving the data in redux in user details state
      dispatch(setUserDetails(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchuserDetails();
  }, []);
  return (
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
            Detail User
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            Name:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {userDetails?.name}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            UserName:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {userDetails?.username}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            Email:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {userDetails?.email}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            Address:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {userDetails.address?.street},{userDetails.address?.city},
              {userDetails.address?.suite} , {userDetails.address?.zipcode}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            Phone:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {userDetails?.phone}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            Website:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {userDetails?.website}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            Company:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {userDetails.company?.name} ,{userDetails.company?.catchPhrase} ,
              {userDetails.company?.bs}
            </span>
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
