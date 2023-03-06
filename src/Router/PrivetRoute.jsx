import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user?.uid) {
    return children;
  }
  return <Navigate to={"/main/login"} />;
};

export default PrivetRoute;
