import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoDetails, setTodo } from "../redux/reducer/userToDoSlice";
import { Link } from "react-router-dom";

function MultipleThings() {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
    centerPadding: "100px 60px 100px 60px",
    swipeToSlide: true,
  };
  const[loading,setloading]=useState("")
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  console.log(todos);
  const fetchTodos = async () => {
    try {
      setloading(true)
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const datanum = await data.json();
      dispatch(setTodo(datanum));
    } catch (error) {
      console.log(error);
    }
    finally{
      setloading(false)
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          margin: "0% 7% ",
        }}
      >
       { loading ? (<div style={{color:"#5d7a8dff", fontSize:"32px",fontWeight:"700"}}> <p>Loading...</p></div>):
        <Slider {...settings}>
          {todos?.length > 0 &&
            todos?.map((content) => {
              return (
                <Link
                  to={`/todo-details/${content.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="Aman">
                    <div
                      style={{
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
                        {content.title}
                      </h4>
                      <p
                        style={{
                          marginTop: " 7px",
                          textAlign: "left",
                          fontSize: "14px",
                          color: "rgb(56 55 70)",
                          fontWeight: "500",
                        }}
                      ></p>
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
                            {content.title[0]}
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
        </Slider>
}
      </div>
    </div>
          
  );
}

export default MultipleThings;
