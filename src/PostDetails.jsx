import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPhotoDetail } from "./redux/reducer/photosSlice";
import Layout from "./component/Layout";
import axios from "axios";
const PostDetails = () => {
  const { id } = useParams();
  const { photoDetail } = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const AxiosData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      console.log(response.data, "posts :::::::");
      dispatch(setPhotoDetail(response.data));
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    AxiosData();
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
          <h1 style={{ textAlign: "center", color: "#2e2a2a" }}>Photos List</h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            Id :
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {photoDetail?.albumId}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            title:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {photoDetail?.title}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            url:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {photoDetail?.url}
            </span>
          </h1>
          <h1 style={{ fontSize: "22px", color: "#1a1818ff" }}>
            thumbnailUrl:
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#549199ff",
              }}
            >
              {photoDetail?.thumbnailUrl}
            </span>
          </h1>
        </div>
      </div>
    </Layout>
  );
};
export default PostDetails;
