import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails, setUsers } from "../redux/reducer/newUserSlice";

function Postdata(){
     
       const dispatch = useDispatch()
   const {userDetails , users} = useSelector((state)=>state.users)
   console.log(userDetails , users)
}
export default Postdata