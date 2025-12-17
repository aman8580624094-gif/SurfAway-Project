import "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./ContactUs.jsx";
import Home from "./Home.jsx";
import Detail from "./Detail.jsx";
import Data from "./Blog.jsx";
import Message from "./Mess.jsx";
import Registr from "./Register.jsx";
import Store from "./redux/store";
import { Provider, useSelector } from "react-redux";
import UserDetails from "./UserDetails.jsx";
import Tododata from "./ToDoDetails.jsx";
import CommentsDetail from "./Comments.jsx";
import PhotosList from "./component/PhotosList.js";
import PostDetails from "./PostDetails.jsx";
import SignIn from "./component/SignIn.js";
import AuthDetail from "./AuthData.jsx";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Home />} />

          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/blogs" element={<Data />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/register" element={<Registr />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
          <Route path="/todo-details/:id" element={<Tododata />} />
          <Route path="/comment-detail/:id" element={<CommentsDetail />} />
          <Route path="/photos-list" element={<PhotosList />} />
          <Route path="/photos-list/:id" element={<PostDetails />} />
          <Route path="/author-detail" element={<AuthDetail />} />
          <Route path="/*" element={<div>Not Found 404</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
