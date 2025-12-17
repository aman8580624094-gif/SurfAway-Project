import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import { BsRecycle } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { RiBuilding3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const CAMP_CADS = [
  {
    img: "https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
    title: "WildBloom Nature Camp",
    description:
      "WildBloom Nature Camp is an immersive outdoor experience designed to help participants reconnect with nature and explore the beauty of the wild. The camp focuses on environmental awareness, sustainability,",
    languages: ["English", "Hindi", "Spanish"],
    location: "Punjab",
    userProfile: "",
    level: "INTERMEDIATE Surf Level",
    JourneyStarted: "Starting From Nov 7th",
    Activities: ["Enjoy hiking", "games", "bonfires", "outdoor creativity"],
  },
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.f2kJ4Aa9hrpKWR-OUoyJOQHaFj?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "WildBloom Nature Camp",
    description:
      "WildBloom Nature Camp is an immersive outdoor experience designed to help participants reconnect with nature and explore the beauty of the wild. The camp focuses on environmental awareness, sustainability,",
    languages: ["English", "Hindi", "Spanish"],
    location: "Kashmir",
    userProfile: "",
    level: "INTERMEDIATE Surf Level",
    JourneyStarted: "Starting From Nov 7th",
    Activities: ["Enjoy hiking", "games", "bonfires", "outdoor creativity"],
  },
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.J9C3DOlq_pyKr06iFCk0LQHaGl?cb=ucfimgc2&w=1440&h=1280&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "WildBloom Nature Camp",
    description:
      "WildBloom Nature Camp is an immersive outdoor experience designed to help participants reconnect with nature and explore the beauty of the wild. The camp focuses on environmental awareness, sustainability,",
    languages: ["English", "Hindi", "Spanish"],
    location: "Goa",
    userProfile: "",
    level: "INTERMEDIATE Surf Level",
    JourneyStarted: "Starting From Nov 7th",
    Activities: ["Enjoy hiking", "games", "bonfires", "outdoor creativity"],
  },
  {
    img: "https://th.bing.com/th/id/OIP.aY2bWZrLy8hna1aiaIunowHaEc?o=7&cb=ucfimgc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "WildBloom Nature Camp",
    description:
      "WildBloom Nature Camp is an immersive outdoor experience designed to help participants reconnect with nature and explore the beauty of the wild. The camp focuses on environmental awareness, sustainability,",
    languages: ["English", "Hindi", "Spanish"],
    location: "Kerala",
    userProfile: "",
    level: "INTERMEDIATE Surf Level",
    JourneyStarted: "Starting From Nov 7th",
    Activities: ["Enjoy hiking", "games", "bonfires", "outdoor creativity"],
  },
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.f2kJ4Aa9hrpKWR-OUoyJOQHaFj?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "WildBloom Nature Camp",
    description:
      "WildBloom Nature Camp is an immersive outdoor experience designed to help participants reconnect with nature and explore the beauty of the wild. The camp focuses on environmental awareness, sustainability,",
    languages: ["English", "Hindi", "Spanish"],
    location: "Himachal",
    userProfile: "",
    level: "INTERMEDIATE Surf Level",
    JourneyStarted: "Starting From Nov 7th",
    Activities: ["Enjoy hiking", "games", "bonfires", "outdoor creativity"],
  },
];

const CampCards = () => {
  return (
    <Link
      style={{
        textAlign:"center",
        textDecoration: "none",
      }}
      to={"/none"}
    >
      <div
        style={{
          paddingTop: "92px",
          backgroundColor: "#f3f2ef",
          paddingBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "46px",
            fontFamily: "cursive",
            fontWeight: "700",
            lineHeight: "56px",
            marginBottom: " 112px",
          }}
        >
          Volunteer in Surf Destinations
          <br />
          Around the World
        </h1>
        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: "95px",
              top: "-63px",
              gap: "14px",
            }}
          >
            <button
              style={{
                display: "flex",
                gap: "8px",
                border: " 1px solid #fff",
                padding: "6px 11px 9px 10px",
                fontSize: "15px",
                fontWeight: "700",
                borderRadius: "20px",
                color: "rgb(65 76 105)",
                boxShadow: "0px 0px 1px 1px",
                alignItems: "center",
              }}
            >
              <AiFillLike
                style={{ color: "rgb(106 125 182)", fontSize: "23px" }}
              />
              Recommended
            </button>
            <button
              style={{
                display: "flex",
                gap: "8px",
                border: " 1px solid #fff",
                padding: "6px 11px 9px 10px",
                fontSize: "15px",
                fontWeight: "700",
                borderRadius: "20px",
                color: "rgb(65 76 105)",
                boxShadow: "0px 0px 1px 1px",
                alignItems: "center",
              }}
            >
              <FaRegHeart
                style={{ color: " rgb(127 92 89)", fontSize: "23px" }}
              />
              From Top Host
            </button>
            <button
              style={{
                display: "flex",
                gap: "8px",
                border: " 1px solid #fff",
                padding: "6px 11px 9px 10px",
                fontSize: "15px",
                fontWeight: "700",
                borderRadius: "20px",
                color: "rgb(65 76 105)",
                boxShadow: "0px 0px 1px 1px",
                alignItems: "center",
              }}
            >
              <RiBuilding3Fill
                style={{ color: "rgb(164 165 167)", fontSize: "23px" }}
              />
              Popular
            </button>
          </div>
        </div>
        {CAMP_CADS.map((item) => {
          console.log(item, "getting item:::::");
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "0px 7% 40px 7%",
                border: " 2px solid #fbfbfb",
                borderRadius: "34px",
                overflow: "hidden",
                boxShadow: "0px 0px 6px 2px #e7e4e4",
              }}
            >
              <img
                style={{ width: "30%", objectFit: "cover" }}
                src={item.img}
              />
              <div
                style={{
                  textAlign: "left",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <div>
                  <p
                    style={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#536074",
                      marginTop: "8px",
                    }}
                  >
                    <FaLocationDot style={{ color: "#000" }} />
                    {item.location}
                  </p>
                </div>
                <div>
                  <h1
                    style={{
                      fontSize: "18px",
                      marginTop: "18px",
                      fontFamily: "sans-serif",
                      fontWeight: "700",
                      marginBottom: "8px",
                      color: "#3c4485",
                    }}
                  >
                    {item.title}
                  </h1>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#364660",
                      marginTop: "-2px",
                    }}
                  >
                    {item.description}
                  </p>

                  <div style={{ display: "flex", gap: "10px" }}>
                    {item?.Activities?.map((active) => (
                      <p
                        style={{
                          marginTop: "0px",
                          padding: "3px 10px",
                          boxShadow: "rgb(220 225 233) 0px 0px 2px 0px",
                          border: "none",
                          fontWeight: "500",
                          fontSize: "15px",
                          borderadius: "5px",
                          color: "rgb(54, 70, 96)",
                          borderRadius: "6px",
                          textTransform: "capitalize",
                        }}
                      >
                        {active}
                      </p>
                    ))}
                  </div>

                  <div>
                    <p
                      style={{
                        display: "flex",
                        gap: "9px",
                        alignItems: "center",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "rgb(46 47 50)",
                        marginBottom: "0",
                        marginTop: "0",
                      }}
                    >
                      <BsCalendarDate style={{ color: "#0e0eb3" }} />
                      {item.JourneyStarted}
                    </p>
                    <p
                      style={{
                        display: "flex",
                        gap: "9px",
                        alignItems: "center",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "rgb(46 47 50)",
                        marginBottom: "5px",
                        marginTop: "5px",
                      }}
                    >
                      <FaSignal style={{ color: "#db1515" }} />
                      {item.level}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "9px",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <BsRecycle
                        style={{ color: "#209120", marginTop: "-12px" }}
                      />
                      {item?.languages?.map((language) => (
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "rgb(46 47 50)",
                            marginTop: "0",
                          }}
                        >
                          {language}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <button
          style={{
            fontWeight: "600",
            border: "1px solid #9c8c8c",
            padding: " 15px 23px",
            borderRadius: "26px",
            backgroundColor: "#3c65a9",
            color: "#e7e5e5",
            marginTop: "10px",
          }}
        >
          Explore opportunities{" "}
        </button>
      </div>
    </Link>
  );
};
export default CampCards;
