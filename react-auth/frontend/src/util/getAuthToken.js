import { redirect } from "react-router-dom";

export function authExpiration() {
  const expiration = localStorage.getItem("expiration");
  let expirationDate = new Date(expiration);
  let now = new Date();
  let duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = authExpiration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function authLoader() {
  return getAuthToken();
}

export function authCheck() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
  return null;
}
