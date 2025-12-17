import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCommentDetail } from "./redux/reducer/commentsSlice";
import Layout from "./component/Layout";
import axios from "axios";

const CommentsDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { commentDetail } = useSelector((state) => state.comment);

  const [isLoading, setIsLoading] = useState(true);
  const [isButtonClicked , setIsButtonClicked] = useState(false)

  const fetchComment = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      dispatch(setCommentDetail(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComment();
  }, [isButtonClicked]);

  console.log(isButtonClicked , "isButtonClicked:::")
  
  return (
    <Layout>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <p
            style={{ fontSize: "22px", color: "#bdb6b6ff", fontWeight: "600" }}
          >
            Loading data...
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            displayDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={()=>setIsButtonClicked(!isButtonClicked)}>Reload</button>
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
              Comments Detail
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
                {commentDetail.name}
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
                {commentDetail.email}
              </span>
            </h1>
            <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
              postId:
              <span
                style={{
                  paddingLeft: "10px",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#549199ff",
                }}
              >
                {commentDetail.postId}
              </span>
            </h1>
            <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
              Detail:
              <span
                style={{
                  paddingLeft: "10px",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#549199ff",
                }}
              >
                {commentDetail?.body}
              </span>
            </h1>
          </div>
        </div>
      )}
    </Layout>
  );
};
export default CommentsDetail;
