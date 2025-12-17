import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhoto } from "../redux/reducer/photosSlice";
import { Link } from "react-router-dom";
import axios from "axios";

const PhotosList = () => {
  const dispatch = useDispatch();
  const { photo } = useSelector((state) => state.photos);
  const fetchPhoto = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      dispatch(setPhoto(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div
      style={{
        marginTop:"40px",
        display: "center",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <div
      
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gridGap: "10px",
          padding: "10px",
          backgroundColor: "#ededef",
          width: "80%",
          margin: "auto",
        }}
      >
        {photo.slice(0,10).map((content) => {
          return (
            <Link to ={`/photos-list/${content.id}`}>
            <div style={{backgroundColor:"#rgb(189 ,203 ,224)",}}>
              {content.url ? (
                <img
                  src={content.thumbnailUrl}
                />
              ) : (
                <p>{content.title[0]}</p>
              )}
            <div>
              <p style={{margin: "0",}}>{content.title}</p>
              <p style={{margin: "0",}}>{content.thumbnailUrl}</p>
              </div>             
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default PhotosList;
