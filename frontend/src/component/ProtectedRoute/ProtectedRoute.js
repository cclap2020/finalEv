import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (protectedComponent, signInComponent) => {
  const isAuth = useSelector((state) => state.isAuth.isAuth);

  if (isAuth) {
    return protectedComponent;
  } else {
    return signInComponent;
  }
};

export default ProtectedRoute;
