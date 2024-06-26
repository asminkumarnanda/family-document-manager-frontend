import "./App.css";
import Layout from "./layout/layout";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { useState,useEffect } from "react";



function App() {


 function checkAuthentication(){
    if(sessionStorage.getItem("auth_token")){
      return true;
    }
     return false;
  }
  // Assuming you have a function to check the authentication status
   const isAuthenticated = checkAuthentication() // Implement this function
 
  // State to manage authentication status
  const [isAuth, setIsAuth] = useState(isAuthenticated);

  useEffect(() => {
    // Check the authentication status when the component mounts
    setIsAuth(checkAuthentication());
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <BrowserRouter>
      {isAuth ? <Layout /> : <Login />}
    </BrowserRouter>
  );
}



export default App;
