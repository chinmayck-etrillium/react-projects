import {
  NavLink,
  useRouteLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";
import { useEffect } from "react";
import { authExpiration } from "../util/getAuthToken";
function MainNavigation() {
  const isLoggedIn = useRouteLoaderData("root");
  const navigate = useNavigate();
  const submit = useSubmit();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }

    if (isLoggedIn === "EXPIRED") {
      submit(null, { method: "post", action: "/logout" });
    }

    const tokenDuration = authExpiration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { method: "post", action: "/logout" });
    }, tokenDuration);
  }, [isLoggedIn, submit, navigate]);

  function logoutHandler() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                to="auth"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
      {isLoggedIn && (
        <button onClick={logoutHandler} disabled={!isLoggedIn}>
          Logout
        </button>
      )}
    </header>
  );
}

export default MainNavigation;
