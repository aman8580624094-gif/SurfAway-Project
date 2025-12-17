import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../redux/reducer/commentsSlice";
import { Link } from "react-router-dom";

const CommentData = () => {
  const [loading,setloading]=useState("")
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comment);
  const commentsData = async () => {
    try {
      setloading(true)
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      dispatch(setComments(data));
    } catch (error) {
      console.log(error);
    }
    finally{
      setloading(false)
    }
  };
  useEffect(()=>{
    commentsData();
  },[])

  
  return (
    <div style={{display:"flex", justifyContent:"center" ,alignItems:"center", width:"50%",margin:"auto"}}>
      {loading? <p style={{fontSize:"28px",color:"#1a6ca3ff", fontWeight:"700",}}>Loading</p>:
      <table style={{ width:"100%" ,border: "1px solid" , borderCollapse:"collapse",textDecoration:"none"}}>
        <tr style={{ border: "1px solid" ,  }} >
          <th>Comments List</th>
        </tr>
        <table style={{width:"100%",}}>
        <tr style={{  }}>
          <th style={{  }}>NAME</th>
          <th style={{ }}>Email</th>
        </tr>
        </table>
        {comments.map((comentData) => {
          return (
            <Link to={`/comment-detail/${comentData.id}`}>
              <table style={{ width:"100%", borderCollapse:"collapse",}}>
              <tr>
                <td style={{ border:"1px solid #d9d5d5",}}>{comentData.name}</td>
                <td style={{ border:"1px solid #d9d5d5",}}>{comentData.email}</td>
              </tr>
              </table>
            </Link>
          );
          
        })},
      </table>
      }
    </div>
  );
};
export default CommentData;
