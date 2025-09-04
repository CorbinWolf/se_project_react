import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./ProtectedRoute.css";

function ProtectedRoute({ children, anonymous = false }) {
  const { isLoggedIn, isTokenChecked } = useContext(CurrentUserContext);

  const location = useLocation();
  const from = location.state?.from || "/";

  if (isTokenChecked) {
    if (anonymous && isLoggedIn) {
      return <Navigate to={from} />;
    }

    if (!anonymous && !isLoggedIn) {
      return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
  } else {
    return (
      <div className="protectedroute protectedroute_opened">
        <div className="protectedroute__content">
          <h1 className="protectedroute__title">
            Processing authorization ...
          </h1>
        </div>
      </div>
    );
  }
}

export default ProtectedRoute;
