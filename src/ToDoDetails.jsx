import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToDoDetails, setTodo } from "./redux/reducer/userToDoSlice";
import Layout from "./component/Layout";

const Tododata = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { todoDetails } = useSelector((state) => state.todo);
  console.log(todoDetails,"::::::::::" )
  const fetchTodos = async () => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const datanum = await data.json();
      dispatch(setToDoDetails(datanum));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

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
            Detail Todo
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
              {todoDetails?.userId}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            Title:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {todoDetails?.title}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            Completed:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {todoDetails.completed ? "yes": "no"}
            </span>
          </h1>
        </div>
      </div>
    </Layout>
  )
};
export default Tododata;
