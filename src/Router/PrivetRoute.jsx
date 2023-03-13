import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "../Shared/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to={"/main/login"} />;
};

export default PrivetRoute;
