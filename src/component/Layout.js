import Header from "./Button"
import Footer from "./Footer"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import axios from "axios";

  // const Layout = ({ children }) => {
  // const dispatch = useDispatch()
  // const userData = JSON.parse(localStorage.getItem("userData"));
  // const userId = userData?.id;
  // console.log(userData,"::::user ::::::")

//   const fetchLoggedInUserDetails = async () => {
//     try {
//       const response = await axios.get(
//         `https://backend-ongoing-workaway-walid.qmc4w5.easypanel.host/api/v1/users/${userId}`
//       );
//       dispatch(setAuthDetails(response?.data?.user))
//       console.log(response, "response:::::;");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(()=>{
// fetchLoggedInUserDetails();
//   },[])
  const Layout = ({ children }) => {
    const dispatch = useDispatch()
    const data =  JSON.parse(localStorage.getItem("userData"));
    const userID = data.id ; 
    const fetchUserData = async ()=>{
      try{
      const response = await axios.get(
        `https://backend-ongoing-workaway-walid.qmc4w5.easypanel.host/api/v1/users/${userID}`);
       dispatch(response.data.user)
    }
    catch(error){
      console.log(error)
    }
    }
    useEffect(()=>{
      fetchUserData()
    },[])
    return(
        <div>
        <Header/>
          {children}
        <Footer/>
        </div>
    )
}

export default Layout 