import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails, setUsers } from "../redux/reducer/newUserSlice";
import { Link } from "react-router-dom";

// const slidercontent = [
//   {
//     logo: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
//     title: "Aman Sharma",
//     location: "India",
//   },
//   { logo: "", name: "Aman Sharma ", location: "India" },
//   { logo: "", name: "Aman Sharma ", location: "India" },
//   { logo: "", name: "Aman Sharma ", location: "India" },
//   { logo: "", name: "Aman Sharma ", location: "India" },
//   { logo: "", name: "Aman Sharma ", location: "India" },
// ];

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
  };
  const dispatch = useDispatch();
  const { userDetails, users } = useSelector((state) => state.users);
  console.log(userDetails, users);
  const fetchUsers = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const datanum = await data.json();
      dispatch(setUsers(datanum));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); 
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontSize: "45px",
          fontFamily: "cursive",
          fontWeight: "700",
          color: "#4e6e8b",
        }}
      >
        Meet Fellow Explorers Like You
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          margin: "0% 7% ",
        }}
      >
        <Slider {...settings}>
          {users?.length > 0 &&
            users?.map((content) => {
              return (
                <Link to={`/user-details/${content.id}`} style={{textDecoration:"none !important"}}>
                  <div className="Aman">
                    <div
                      style={{
                        textDecoration:"none !important",
                        position: "absolute",
                        color: "#fff8f8",
                        bottom: "44px",
                        marginLeft: "35px",
                        width: "80%",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "17px",
                          color: "rgb(249, 249, 249)",
                          fontWeight: " 600",

                          margin: "0",
                          lineHeight: "17px",
                          textAlign: "left",
                          width: "9%",
                        }}
                      >
                        {content.name}
                      </h4>
                      <p
                        style={{
                          marginTop: " 7px",
                          textAlign: "left",
                          fontSize: "14px",
                          color: "rgb(56 55 70)",
                          fontWeight: "500",
                        }}
                      >
                        {content.phone}
                      </p>
                    </div>

                    <div
                      style={{
                        // padding: "95px 0px 90px 0px",
                        background: "#a39c9c",
                        objectfit: "cover",
                        marginLeft: "22px",
                        marginRight: "22px",
                        borderRadius: "25px",
                        marginTop: "40px",
                        marginBottom: "40px",
                      }}
                    >
                      {/* ternary operator */}
                      {content.logo ? (
                        <img
                          src={content.logo}
                          height={"350px"}
                          width={"100%"}
                          style={{
                            objectFit: "cover",
                            borderRadius: "25px",
                            position: "",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            height: "305px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "",
                          }}
                        >
                          <h1
                            style={{
                              fontSize: "81px",
                              fontWeight: "500",
                              color: "#6a4848",
                              marginTop: "-10px",
                            }}
                          >
                            {content.name[0]}
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

export default MultipleItems;
